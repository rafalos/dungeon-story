import { Request, Response } from 'express';
import Shop from '../models/Shop';

export const getShop = async (_: Request, response: Response) => {
  const currentShop = await Shop.findOne({});

  response.json(currentShop);
};
