import { NextFunction, Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Exploration from '../models/Exploration';
import { generateNextChapter, initializeStory } from '../utils/generateChapter';
import User from '../models/User';
import { ExplorationEvent } from '../types';
import Story, { IStory } from '../models/Story';

export const getCurrentChapter = async (
  req: Request<{
    id: string;
  }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const exploration = await Exploration.findById(id);

  if (!exploration) return next('There was an error finding exploration');
  if (!exploration.active) return next('Exploration has ended');

  const currentStory = await Story.findOne({
    exploration: exploration._id,
  });

  if (!currentStory) return next('There was an error finding story');

  if (currentStory.chapters.length >= exploration.currentStage + 2) {
    return res.json({
      message: currentStory.chapters[currentStory.chapters.length - 1],
    });
  }

  if (exploration.currentStage > exploration.seed.length - 1) {
    exploration.currentStage = 999;
  }

  let event: ExplorationEvent;

  switch (exploration.currentStage) {
    case -1:
      event = 'entry';
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
  }

  const nextChapter = await generateNextChapter(exploration.story, event);

  await exploration.save();
  res.json({
    message: nextChapter,
  });
};

export const movePosition = async (
  req: Request<{
    id: string;
  }>,
  res: Response,
  next: NextFunction
) => {
  const explorationID = req.params.id;

  const exploration = await Exploration.findById(explorationID);

  if (!exploration) return next('There was an error finding exploration');

  exploration.currentStage++;

  await exploration.save();

  res.json(exploration);
};

export const generateExploration = async (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  const currentUser = await User.findOne({});
  if (!currentUser) return next('Character not found');

  const explorations = await Exploration.find({
    $and: [
      {
        userID: currentUser._id,
      },
      { active: true },
    ],
  });

  if (explorations.length >= +process.env.ACTIVE_EXPLORATION_LIMIT!)
    return next('User has reached exploration limit');

  if (currentUser.energy <= 0)
    return next(
      `${currentUser._id.toString()} has not enough energy to start exploration`
    );

  const newSeed = generateSeed();

  const exploration = new Exploration({
    userID: currentUser._id,
    seed: newSeed,
  });

  const story = await initializeStory(exploration._id);

  exploration.story = story._id;
  exploration.name = story.location;

  await exploration.save();

  currentUser.energy -= 1;
  currentUser.save();

  response.json({
    message: `Exploration ${story.location} has been generated`,
  });
};

export const getExploration = async (
  request: Request<{
    id: string;
  }>,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;

  const exploration = await Exploration.findById(id);

  if (!exploration) return next('Exploration not found');

  response.json(exploration);
};

export const getExplorations = async (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  const currentUser = await User.findOne({});

  if (!currentUser) return next('Character not found');

  const explorations = await Exploration.find({
    $and: [
      {
        userID: currentUser._id,
      },
      { active: true },
    ],
  });

  response.json(explorations);
};
