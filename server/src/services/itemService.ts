import { HydratedDocument } from 'mongoose';
import { UserDocument } from '../models/User';
import { Equipment } from '../types';
import Inventory from '../models/Inventory';
import * as userService from '../services/userService';
import * as inventoryService from '../services/inventoryService';
import { AppError } from '../errors/AppError';

const removeOwnership = (item: HydratedDocument<Equipment>) => {
  item.owner = null;
};

export const sellItem = async (
  user: UserDocument,
  item: HydratedDocument<Equipment>
) => {
  const inventory = await Inventory.findOne({
    user: user._id,
  });

  if (!inventory) throw new AppError('Inventory was not found', 404);

  inventoryService.removeEntity(inventory, item._id.toString());
  removeOwnership(item);
  userService.addGold(user, item.sellPrice);

  await Promise.all([user.save(), inventory.save(), item.save()]);
};
