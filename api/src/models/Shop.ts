import { Schema, model } from 'mongoose';
import { IShop } from '../types';
import { equipmentSchema } from './Equipment';

const shopSchema = new Schema<IShop>({
  items: [equipmentSchema],
  lastRefreshed: Date,
});

export default model<IShop>('Shop', shopSchema);
