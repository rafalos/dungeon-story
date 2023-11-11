import { NextFunction, Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Player from '../models/Player';
import Exploration from '../models/Exploration';
import Story from '../models/Story';
import { generateChapters } from '../utils/generateChapter';

export const getNewExploration = async (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  const currentPlayer = await Player.findOne({});

  if (!currentPlayer) return next('Player not found');

  if (currentPlayer.energy <= 0)
    return next(
      `${currentPlayer._id.toString()} has not enough energy to start exploration`
    );

  const newSeed = generateSeed();

  const exploration = new Exploration({
    playerID: currentPlayer._id,
    seed: newSeed,
  });

  const story = new Story({
    exploration: exploration._id,
  });

  await exploration.save();
  await story.save();

  const fullStory = await generateChapters(newSeed, story._id);

  currentPlayer.energy -= 1;
  currentPlayer.save();

  response.json({
    seed: newSeed,
    story: fullStory,
  });
};
