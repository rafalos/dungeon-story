import mongoose, { Schema, Types, model } from 'mongoose';
import { ExplorationSeed } from '../types';

export interface IExploration {
  seed: ExplorationSeed;
  currentStage: number;
  userID: Types.ObjectId;
  story: Types.ObjectId;
  active: boolean;
}

export const explorationSchema = new Schema<IExploration>({
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
});

export default model<IExploration>('Exploration', explorationSchema);
