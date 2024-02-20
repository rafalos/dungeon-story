import { Request, Response } from 'express';

export const getUser = async (request: Request, response: Response) => {
  response.json(request.user);
};
