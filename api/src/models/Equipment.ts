import { Schema, model } from 'mongoose';
import { IEquipment, IShop } from '../types';

export const equipmentSchema = new Schema<IEquipment>({
  icon: String,
  modifiers: [Array],
  name: String,
  sellPrice: Number,
  type: 'equipment',
  slot: String,
});

export default model<IEquipment>('Equipment', equipmentSchema);
