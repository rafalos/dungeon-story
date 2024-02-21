import { NextFunction, Request, Response } from 'express';
import Inventory from '../models/Inventory';
import { ObjectId } from 'mongodb';
import Shop from '../models/Shop';
import Equipment from '../models/Equipment';
import { type Equipment as EquipmentType } from '../types';

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

  if (!inventory)
    return response.status(403).json({
      message: 'an authorization error occured',
    });

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
    item,
  });
};

export const wearItem = async (request: Request, response: Response) => {
  const inventory = await Inventory.findOne({
    user: request.user._id,
  })
    .populate<{ worn: EquipmentType[] }>('worn')
    .exec();

  if (!inventory)
    return response.status(403).json({
      message: 'an authorization error occured',
    });

  if (inventory.worn.length > 0) {
    const isEquippable = !inventory.worn.some(
      (item) => item.slot === request.item.slot
    );

    if (!isEquippable) {
      return response.status(403).json({
        message: 'Error occured while trying to equip that item',
      });
    }
  }

  inventory.worn.push(request.item._id as unknown as EquipmentType);
  inventory.equipment = inventory.equipment.filter(
    (item) => !item._id.equals(request.item._id)
  );

  await inventory.save();

  response.status(200).json({
    message: 'Item equipped succesfully',
  });
};

export const unwearItem = async (request: Request, response: Response) => {
  const inventory = await Inventory.findOne({
    user: request.user._id,
  });

  if (!inventory)
    return response.status(403).json({
      message: 'an authorization error occured',
    });

  const itemToUnwear = inventory.worn.find(
    (itemID) => itemID.toString() === request.params.itemID
  );

  if (!itemToUnwear) {
    return response.status(403).json({
      message: 'Error occured while trying to unequip that item',
    });
  }

  inventory.worn = inventory.worn.filter(
    (itemID) => itemID.toString() !== request.params.itemID
  );

  inventory.equipment.push(itemToUnwear);

  await inventory.save();

  response.status(200).json({
    message: 'Item unequipped succesfully',
  });
};
