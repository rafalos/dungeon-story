import { HydratedDocument, Types } from 'mongoose';
import { generateSeed } from '../logic/generators/seed';
import Exploration from '../models/Exploration';
import { generateNextChapter, initializeStory } from '../utils/generateChapter';
import { getHealth } from '../logic/resources/formulas';
import { AppError } from '../errors/AppError';
import { ExplorationEvent, type User as UserType } from '../types';
import { handleEvent } from '../handlers/handleEvent';
import Story from '../models/Story';

export const getState = async (explorationID: string) => {
  const exploration = await Exploration.findById(explorationID);

  if (!exploration) throw new AppError('Exploration was not found', 404);
  if (!exploration.active) throw new AppError('Exploration has ended');

  const currentStory = await Story.findOne({
    exploration: exploration._id,
  });

  if (!currentStory) throw new AppError('Story was not found', 404);

  if (currentStory.chapters.length >= exploration.currentStage + 2) {
    return currentStory.chapters[currentStory.chapters.length - 1];
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

  return nextChapter;
};

export const generate = async (user: HydratedDocument<UserType>) => {
  if (!user) throw new AppError('User was not found');

  if (user.energy <= 0)
    throw new Error(`You do not have enough energy to start exploration`);

  const explorationCount = await Exploration.countDocuments({
    userID: user._id,
    active: true,
  });

  if (explorationCount >= +process.env.ACTIVE_EXPLORATION_LIMIT!)
    throw new Error('Reached exploration limit');

  const newSeed = generateSeed();

  const exploration = new Exploration({
    userID: user._id,
    seed: newSeed,
  });

  const story = await initializeStory(exploration._id);

  exploration.story = story._id;
  exploration.name = story.location;

  const maxHealth = getHealth(user.attributes.vitality);

  exploration.currentHealth = maxHealth;
  exploration.maxHealth = maxHealth;

  user.energy -= 1;
  await user.save();

  await exploration.save();

  return exploration;
};

export const advance = async (
  explorationID: string,
  user: HydratedDocument<UserType>
) => {
  const exploration = await Exploration.findOne({
    userID: user._id.toString(),
    _id: explorationID,
  });

  if (!exploration)
    throw new AppError('There was an error finding exploration', 404);

  exploration.currentStage++;

  const result = await handleEvent(user, exploration);

  return result;
};

export const getAll = async (userID: Types.ObjectId) => {
  const explorations = await Exploration.find({
    userID,
    active: true,
  });

  return explorations;
};
