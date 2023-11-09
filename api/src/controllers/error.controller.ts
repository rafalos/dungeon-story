import { Request, Response } from 'express';

export const get404 = (_: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
  });
};
