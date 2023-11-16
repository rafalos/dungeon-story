import { NextFunction, Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Exploration from '../models/Exploration';
import Story from '../models/Story';
import { generateChapters } from '../utils/generateChapter';
import User from '../models/User';

export const getNewExploration = async (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  const currentCharacter = await User.findOne({});

  if (!currentCharacter) return next('Character not found');

  if (currentCharacter.energy <= 0)
    return next(
      `${currentCharacter._id.toString()} has not enough energy to start exploration`
    );

  const newSeed = generateSeed();

  const exploration = new Exploration({
    playerID: currentCharacter._id,
    seed: newSeed,
  });

  const story = new Story({
    exploration: exploration._id,
  });

  await exploration.save();
  await story.save();

  const fullStory = await generateChapters(newSeed, story._id);

  currentCharacter.energy -= 1;
  currentCharacter.save();

  response.json({
    seed: newSeed,
    story: fullStory,
  });
};
