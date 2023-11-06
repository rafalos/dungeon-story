import { Schema, model } from 'mongoose';
import { IEquipment } from '../types';

export const equipmentSchema = new Schema<IEquipment>({
  icon: String,
  modifiers: [Array],
  name: String,
  sellPrice: Number,
  type: String,
  slot: String,
  owner: String,
});

export default model<IEquipment>('Equipment', equipmentSchema);
