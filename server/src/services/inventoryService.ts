import { AppError } from '../errors/AppError';
import Inventory, { InventoryDocument } from '../models/Inventory';

export const getInventory = async (userID: string) => {
  const inventory = await Inventory.findOne({
    user: userID,
  }).populate('equipment worn');

  if (!inventory) throw new AppError('Inventory was not found', 404);

  return inventory;
};

export const removeEntity = async (
  inventory: InventoryDocument,
  itemID: string
) => {
  inventory.equipment = inventory.equipment.filter(
    ({ _id }) => _id.toString() !== itemID
  );
};
