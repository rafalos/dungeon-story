import { Request, Response } from 'express';
import * as StoryService from '../services/storyService';

export const getStories = async (_: Request, response: Response) => {
  const stories = await StoryService.getAll();

  response.json(stories);
};

export const getStory = async (request: Request, response: Response) => {
  const story = await StoryService.getById(request.params.id);

  response.json(story);
};
