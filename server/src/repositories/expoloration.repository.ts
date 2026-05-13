import Exploration from '../models/Exploration';
import { ExplorationRepository } from './types';

export const explorationRepository: ExplorationRepository = {
  create: (entity) => {
    const exploration = new Exploration(entity);

    return exploration;
  },

  delete: async (id) => {
    await Exploration.findByIdAndDelete(id);
  },
  getById: async (id) => {
    const exploration = await Exploration.findById(id);

    return exploration;
  },
  save: async (entity) => {
    await entity.save();
  },
  update: async (id, entity) => {
    await Exploration.findByIdAndUpdate(id, entity);
  },
  countActiveForUser: async (userID) => {
    const explorationCount = await Exploration.countDocuments({
      userID: userID,
      active: true,
    });

    return explorationCount;
  },
  getAllActiveForUser: async (userID) => {
    const explorations = await Exploration.find({
      userID: userID,
      active: true,
    });

    return explorations;
  },
  getByIdForUser: async (explorationID, userID) => {
    const exploration = await Exploration.findOne({
      userID: userID,
      _id: explorationID,
    });

    return exploration;
  },
};
