import mongoose, { Schema, Types, model } from 'mongoose';
import { ExplorationSeed } from '../types';

export interface IExploration {
  seed: ExplorationSeed;
  currentStage: number;
  userID: Types.ObjectId;
  story: Types.ObjectId;
  active: boolean;
  name: string;
}

export const explorationSchema = new Schema<IExploration>(
  {
    name: String,
    active: {
      type: Boolean,
      default: true,
    },
    seed: [],
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    currentStage: {
      type: Number,
      default: -1,
    },
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
