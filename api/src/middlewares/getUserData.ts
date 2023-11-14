import { NextFunction, Request, Response } from 'express';
import { IRequestWithAuth } from '../types';

export const getUserData = (
  req: IRequestWithAuth,
  res: Response,
  next: NextFunction
) => {
  if (!req.auth) return next('Authentication error');

  if (typeof req.auth.payload.user_email === 'string') {
    req.user = req.auth.payload.user_email;
    next();
  } else {
    next('Malformed user details');
  }
};
