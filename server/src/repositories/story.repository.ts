import Story from '../models/Story';
import { type StoryRepository } from './types';

export const storyRepository: StoryRepository = {
  create: (entity) => {
    const story = new Story(entity);

    return story;
  },
  delete: async (id) => {
    await Story.findByIdAndDelete(id);
  },
  getAll: async () => {
    const stories = await Story.find();

    return stories;
  },
  getById: async (id) => {
    const story = await Story.findById(id);

    return story;
  },
  save: async (entity) => {
    await entity.save();
  },
  update: async (id, entity) => {
    await Story.findByIdAndUpdate(id, entity);
  },
  getForExploration: async (explorationID) => {
    const story = await Story.findOne({
      exploration: explorationID,
    });

    return story;
  },
};
