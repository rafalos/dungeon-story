import { Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';
import Player from '../models/Player';
import Exploration from '../models/Exploration';

export const getNewExploration = async (_: Request, response: Response) => {
  const currentPlayer = await Player.findOne({});
  const newSeed = generateSeed();

  const exploration = new Exploration({
    playerID: currentPlayer?._id,
    seed: newSeed,
  });

  await exploration.save();

  response.json({
    message: 'Exploration created succesfully',
  });
};
