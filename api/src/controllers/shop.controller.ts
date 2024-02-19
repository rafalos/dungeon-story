import { Request, Response } from 'express';
import Shop from '../models/Shop';


export const getShop = async (_: Request, response: Response) => {
  const currentShop = await Shop.findOne({}).populate('items').exec();

  response.json(currentShop);
};
