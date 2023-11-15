import { NextFunction, Request, Response } from 'express';
import Shop from '../models/Shop';
import Equipment from '../models/Equipment';
import { ObjectId } from 'mongodb';
import User from '../models/User';
import Inventory from '../models/Inventory';

export const getShop = async (_: Request, response: Response) => {
  const currentShop = await Shop.findOne({}).populate('items').exec();

  response.json(currentShop);
};

export const buyItem = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const currentShop = await Shop.findOne({});

  if (!currentShop) return next('The shop was not found');
  if (!currentShop.items.includes(new ObjectId(request.params.id)))
    throw new Error('Selected item is not found in the shop');

  const item = await Equipment.findOne(new ObjectId(request.params.id));

  if (!item) return next('No selected item found');

  const currentUser = request.auth?.payload.user_email;

  const user = await User.findOne({
    email: currentUser,
  })
    .populate('character')
    .exec();

  if (!user) return next('No user found');

  const characterId = user.character._id;

  const inventory = await Inventory.findOne({
    characterID: characterId,
  });

  if (!inventory) return next('No inventory found');

  inventory.equipment.push(item._id);

  item.owner = characterId;

  const itemIndex = currentShop.items.findIndex(
    (itemId) => itemId.toString() === request.params.id
  );

  currentShop.items.splice(itemIndex, 1);

  await item.save();
  await currentShop.save();
  await inventory.save();

  response.json({
    message: 'Item was bought succesfully',
  });
};
