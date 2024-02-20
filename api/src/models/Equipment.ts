import { Schema, Types, model } from 'mongoose';
import { Equipment } from '../types';

export const equipmentSchema = new Schema<Equipment>({
  icon: String,
  modifiers: [Array],
  name: String,
  sellPrice: Number,
  buyPrice: Number,
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

equipmentSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    ret.id = ret._id;
    delete ret._id;
    delete ret.owner;
  },
});

export default model<Equipment>('Equipment', equipmentSchema);
