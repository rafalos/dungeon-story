import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

export const getInventory = async (request: Request, response: Response) => {
  const inventory = await Inventory.findOne({
    user: request.user._id,
  }).populate('equipment worn');

  if (!inventory) {
    return response.status(500).json({
      message: 'There was an error finding inventory',
    });
  }

  response.json(inventory);
};
