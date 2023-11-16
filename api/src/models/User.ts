import { Schema, Types, model } from 'mongoose';

export interface IUser {
  email: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
  inventory: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
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
    default: 500,
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

export default model<IUser>('User', userSchema);
