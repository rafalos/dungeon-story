import mongoose, { Schema, Types, model } from 'mongoose';
import { ClassType, IItem, Modifier, SlotType } from '../types';
export interface IEquipment extends IItem {
  modifiers: Modifier[];
  type: 'equipment';
  slot: SlotType;
  classType: ClassType;
  owner: Types.ObjectId | null;
}

export const equipmentSchema = new Schema<IEquipment>({
  icon: String,
  modifiers: [Array],
  name: String,
  sellPrice: Number,
  type: String,
  slot: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
});

export default model<IEquipment>('Equipment', equipmentSchema);
