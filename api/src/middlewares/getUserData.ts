import { NextFunction, Request, Response } from 'express';
import User from '../models/User';

export const getUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.auth) return next('Authentication error');

  if (typeof req.auth.payload.user_email === 'string') {
    const user = await User.findOne({
      email: req.auth.payload.user_email,
    });

    if (!user)
      return res.json({
        message: 'Authentication error',
      });

    req.user = user;
    next();
  } else {
    return res.status(400).json({
      message: 'Malformed user details',
    });
  }
};
