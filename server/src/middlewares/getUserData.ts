import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import { createNewUser } from '../handlers/createNewUser';

export const getUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.auth) return next('Authentication error');
  let user;

  if (typeof req.auth.payload.user_email === 'string') {
    user = await User.findOne({
      email: req.auth.payload.user_email,
    });

    if (!user) {
      user = await createNewUser(req.auth.payload.user_email);
    }

    req.user = user;
    next();
  } else {
    return res.status(400).json({
      message: 'Malformed user details',
    });
  }
};
