import { Schema, model } from 'mongoose';
import { ClassType, IItem, Modifier, SlotType } from '../types';
export interface IEquipment extends IItem {
  modifiers: Modifier[];
  type: 'equipment';
  slot: SlotType;
  classType: ClassType;
  owner?: string;
}

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
