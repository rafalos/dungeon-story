import { Schema, Types, model } from 'mongoose';
import { Equipment } from '../types';

export const equipmentSchema = new Schema<Equipment>({
  icon: String,
  modifiers: [Array],
  name: String,
  sellPrice: Number,
  type: String,
  slot: String,
  classType: String,
  armor: Number,
  damage: Number,
  descriptor: String,
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

export default model<Equipment>('Equipment', equipmentSchema);
