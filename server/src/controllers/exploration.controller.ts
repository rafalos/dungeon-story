import { NextFunction, Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Exploration from '../models/Exploration';
import { generateNextChapter, initializeStory } from '../utils/generateChapter';
import { ExplorationEvent } from '../types';
import Story from '../models/Story';
import { handleEvent } from '../handlers/handleEvent';
import { getHealth } from '../logic/resources/formulas';
import { getPhoto } from '../utils/generatePhoto';
import { uploadByUrl } from '../lib/cloudinary';

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
  request: Request<{
    id: string;
  }>,
  response: Response,
  next: NextFunction
) => {
  const explorationID = request.params.id;

  const exploration = await Exploration.findById(explorationID);

  if (!exploration) return next('There was an error finding exploration');

  exploration.currentStage++;

  const result = await handleEvent(request.user, exploration);

  response.json({
    healthDiff: result?.healthDiff,
    experienceGained: result?.experienceGained,
    itemsFound: result?.itemsFound,
  });
};

export const generateExploration = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const currentUser = request.user;
  const explorations = await Exploration.find({
    $and: [
      {
        userID: request.user._id,
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

  const maxHealth = getHealth(currentUser.attributes.vitality);

  exploration.currentHealth = maxHealth;
  exploration.maxHealth = maxHealth;

  currentUser.energy -= 1;
  currentUser.save();

  const image = (await getPhoto(story.location)).data[0].url as string;

  const imageURL = await uploadByUrl(image);

  exploration.image = imageURL;

  await exploration.save();
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

export const getExplorations = async (request: Request, response: Response) => {
  const explorations = await Exploration.find({
    $and: [
      {
        userID: request.user._id,
      },
      { active: true },
    ],
  });

  response.json(explorations);
};
