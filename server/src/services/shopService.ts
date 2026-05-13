import { AppError } from '../errors/AppError';
import Shop from '../models/Shop';

export const getCurrent = async () => {
  const currentShop = await Shop.findOne().populate('items');

  if (!currentShop) throw new AppError('Shop was not found', 404);

  return currentShop;
};
