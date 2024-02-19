import { NextFunction, Request, Response } from 'express';
import Inventory from '../models/Inventory';
import { ObjectId } from 'mongodb';
import Equipment from '../models/Equipment';
import Shop from '../models/Shop';

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

export const buyItem = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const currentShop = await Shop.findOne({});

  if (!currentShop) return next('The shop was not found');
  if (!currentShop.items.includes(new ObjectId(request.params.itemID)))
    return next('Selected item is not found in the shop');

  const item = await Equipment.findOne(new ObjectId(request.params.itemID));

  if (!item) return next('No selected item found');
  if (item.buyPrice > request.user.gold)
    return response.status(403).json({
      message: 'Not enough gold to buy that item',
    });

  const inventory = await Inventory.findOne({
    user: request.user._id,
  });

  if (!inventory) return next('No inventory found');

  inventory.equipment.push(item._id);

  item.owner = request.user._id;

  request.user.gold -= item.buyPrice;

  const itemIndex = currentShop.items.findIndex(
    (itemId) => itemId.toString() === request.params.itemID
  );

  currentShop.items.splice(itemIndex, 1);

  await Promise.all([
    item.save(),
    currentShop.save(),
    inventory.save(),
    request.user.save(),
  ]);

  response.json({
    message: 'Item was bought succesfully',
  });
};
