import { NextFunction, Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Exploration from '../models/Exploration';
import { generateNextChapter, initializeStory } from '../utils/generateChapter';
import User from '../models/User';
import { ExplorationEvent } from '../types';

export const getNextChapter = async (
  req: Request<{
    id: string;
  }>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const exploration = await Exploration.findById(id);

  if (!exploration) return next('There was an error finding exploration');
  if (!exploration.active) return next('Exploration has ended');

  if (exploration.currentStage > exploration.seed.length - 1) {
    exploration.currentStage = 999;
  }

  let event: ExplorationEvent;

  switch (exploration.currentStage) {
    case -1:
      event = 'entry';
      exploration.currentStage++;
      break;
    case 666:
      event = 'death';
      exploration.active = false;
      break;
    case 999:
      event = 'ending';
      exploration.active = false;
      break;
    default:
      event = exploration.seed[exploration.currentStage];
      exploration.currentStage++;
  }

  const nextChapter = await generateNextChapter(exploration.storyID, event);

  await exploration.save();
  res.json({
    message: nextChapter,
  });
};

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

  const story = await initializeStory(exploration._id);

  exploration.storyID = story._id;

  await exploration.save();

  currentCharacter.energy -= 1;
  currentCharacter.save();

  response.json({
    explorationID: exploration._id.toString(),
    seed: newSeed,
    location: story.location,
  });
};
