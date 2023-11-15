import { Schema, Types, model } from 'mongoose';
export interface ICharacter {
  name: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
  inventory: Types.ObjectId;
}

const characterSchema = new Schema<ICharacter>({
  name: {
    type: String,
    required: true,
  },
  energy: {
    type: Number,
    required: true,
    default: 3,
  },
  experience: {
    type: Number,
    default: 0,
  },
  gold: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
    required: true,
  },
  maxExperience: {
    type: Number,
    default: 100,
    required: true,
  },
  statPoints: {
    type: Number,
    default: 0,
    required: true,
  },
  inventory: {
    type: Schema.Types.ObjectId,
    ref: 'Inventory',
  },
});

export default model<ICharacter>('Character', characterSchema);
