import { Request, Response } from 'express';
import Story from '../models/Story';

export const getStories = async (_: Request, response: Response) => {
  const stories = await Story.find();

  response.json(stories);
};

export const getStory = async (request: Request, response: Response) => {
  const { id } = request.params;

  const story = await Story.findById(id);

  if (!story) {
    response.status(404).json({
      message: 'Story was not found',
    });
  }

  response.json(story);
};
