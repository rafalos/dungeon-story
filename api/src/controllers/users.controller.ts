import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import Inventory from '../models/Inventory';

const createNewUser = async (userEmail: string) => {
  const newUser = new User({
    email: userEmail,
  });

  const newInventory = new Inventory();

  newUser.inventory = newInventory._id;
  newInventory.user = newUser._id;

  await Promise.all([newInventory.save(), newUser.save()]);

  return newUser;
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userEmail = req.auth?.payload.user_email;
  if (typeof userEmail !== 'string' || !userEmail)
    return res
      .status(400)
      .json({ message: 'Malformed or missing user information' });

  let user;

  user = await User.findOne({
    email: userEmail,
  });

  if (!user) {
    user = await createNewUser(userEmail);
  }

  await user.save();
  res.json(user);
};
