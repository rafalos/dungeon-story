import { Request, Response } from 'express';
import { generateSeed } from '../logic/generators/seed';

export const getNewExplorationSeed = (_: Request, response: Response) => {
  const newSeed = generateSeed();

  response.json(newSeed);
};
