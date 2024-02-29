import { Schema, Types, model } from 'mongoose';
import { ExplorationPrimitives } from '../types';

export interface IExploration {
  maxHealth: number;
  currentHealth: number;
  seed: ExplorationPrimitives[];
  currentStage: number;
  userID: Types.ObjectId;
  story: Types.ObjectId;
  active: boolean;
  name: string;
  image: string;
}

export const explorationSchema = new Schema<IExploration>(
  {
    name: String,
    active: {
      type: Boolean,
      default: true,
    },
    maxHealth: Number,
    currentHealth: Number,
    seed: [],
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    currentStage: {
      type: Number,
      default: -1,
    },
    image: String,
    story: {
      type: Schema.Types.ObjectId,
      ref: 'Story',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret.story;
        delete ret.userID;
        delete ret._id;
      },
    },
  }
);

export default model<IExploration>('Exploration', explorationSchema);
