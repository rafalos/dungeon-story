import { Request, Response } from 'express';
import User from '../models/User';
import { Types } from 'mongoose';
import Character from '../models/Character';

const createNewCharacter = async (userId: Types.ObjectId) => {
  const newCharacter = new Character({
    name: 'Test Char',
  });

  await User.findOneAndUpdate(userId, {
    character: newCharacter._id,
  });

  await newCharacter.save();

  return newCharacter;
};

export const getCharacter = async (req: Request, res: Response) => {
  const currentUser = req.auth?.payload.user_email;
  let user, character;

  user = await User.findOne({
    email: currentUser,
  });

  if (!user) {
    user = new User({
      email: currentUser,
    });
  }

  character = await Character.findOne(user.character);

  if (!character) {
    character = await createNewCharacter(user._id);
  }

  await user.save();
  res.json(character);
};
