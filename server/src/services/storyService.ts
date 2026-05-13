import { ObjectId } from 'mongodb';
import { AppError } from '../errors/AppError';
import { storyRepository } from '../repositories/story.repository';
import { generateLocation } from '../utils/generateLocation';

export const getAll = async () => {
  const stories = await storyRepository.getAll();

  return stories;
};

export const getById = async (storyID: string) => {
  const story = storyRepository.getById(storyID);

  if (!story) throw new AppError('Story was not found', 404);

  return story;
};

export const initialize = async (explorationID: ObjectId) => {
  const story = storyRepository.create({
    exploration: explorationID,
  });

  story.location = await generateLocation();

  await storyRepository.save(story);

  return story;
};
