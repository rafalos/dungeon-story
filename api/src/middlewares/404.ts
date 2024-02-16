import { Request, Response } from 'express';

export const notFound = (request: Request, response: Response) => {
  response.status(404).json({
    message: 'Invalid route',
  });
};
