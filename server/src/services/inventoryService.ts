import { AppError } from '../errors/AppError';
import Inventory from '../models/Inventory';

export const getItems = async (userID: string) => {
  const inventory = await Inventory.findOne({
    user: userID,
  }).populate('equipment worn');

  if (!inventory) throw new AppError('Inventory was not found', 404);

  return inventory;
};
