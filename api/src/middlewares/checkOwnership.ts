import { NextFunction, Request, Response } from 'express';
import Equipment from '../models/Equipment';
import Inventory from '../models/Inventory';

export const checkOwnership = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { itemID } = request.params;
  const item = await Equipment.findById(itemID);
  if (!item)
    return response.status(404).json({ message: 'Item was not found' });

  const inventory = await Inventory.findOne({
    user: request.user._id,
  });

  if (!inventory) {
    return response.status(500).json({
      message: 'Internal error',
    });
  }

  if (inventory.equipment.map((eqId) => eqId.toString()).includes(itemID)) {
    request.item = item;
    return next();
  } else {
    return response.status(401).json({
      message: 'Unauthorized operation',
    });
  }
};
