import { Schema, model } from 'mongoose';
import { User } from '../types';

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  damage: {
    type: Number,
    default: 1,
  },
  armor: {
    type: Number,
    default: 1,
  },
  criticalChance: {
    type: Number,
    default: 20,
  },
  energy: {
    type: Number,
    required: true,
    default: 3,
  },
  attributes: {
    strength: {
      type: Number,
      default: 0,
    },
    vitality: {
      type: Number,
      default: 0,
    },
    agility: {
      type: Number,
      default: 0,
    },
  },
  experience: {
    type: Number,
    default: 0,
  },
  gold: {
    type: Number,
    default: 10,
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
  inventory: {
    type: Schema.Types.ObjectId,
    ref: 'Inventory',
  },
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.inventory;
    ret.id = ret._id;
    delete ret._id;
  },
});

export default model<User>('User', userSchema);
