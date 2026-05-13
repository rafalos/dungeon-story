import { Request, Response } from 'express';
import * as shopService from '../services/shopService';

export const getShop = async (_: Request, response: Response) => {
  const shop = await shopService.getCurrent();

  response.json(shop);
};
