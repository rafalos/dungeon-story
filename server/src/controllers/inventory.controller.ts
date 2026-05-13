import { Request, Response } from 'express';
import * as InventoryService from '../services/inventoryService';

export const getInventory = async (request: Request, response: Response) => {
  const playerItems = await InventoryService.getInventory(
    request.user._id.toString()
  );

  response.json({
    items: playerItems,
  });
};
