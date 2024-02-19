import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

export const sellItem = async (request: Request, response: Response) => {
  const { user, item } = request;

  const inventory = await Inventory.findById(user.inventory);

  if (!inventory)
    return response.status(403).json({
      message: 'an authorization error occured',
    });

  const newEquipment = inventory.equipment.filter(
    (itemID) => !itemID.equals(item._id)
  );

  inventory.equipment = newEquipment;

  user.gold += item.sellPrice;
  item.owner = null;

  await Promise.all([user.save(), item.save(), inventory.save()]);

  response.status(200).json({
    message: 'Item sold succesfully',
  });
};
