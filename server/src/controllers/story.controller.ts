import { NextFunction, Request, Response } from 'express';
import Story from '../models/Story';

export const getStories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stories = await Story.find();

  res.json(stories);
};
