import { NextFunction, Request, Response } from 'express';
import Equipment from '../models/Equipment';

export const getItemData = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const item = await Equipment.findById(request.params.itemID);

  if (!item) {
    return response.status(403).json({
      message: 'There was a problem finding item',
    });
  }

  request.item = item;

  next();
};
