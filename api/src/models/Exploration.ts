import mongoose, { Schema, Types, model } from 'mongoose';
import { ExplorationSeed } from '../types';

export interface IExploration {
  seed: ExplorationSeed;
  currentStage: number;
  user: Types.ObjectId;
  storyID: Types.ObjectId;
  active: boolean;
}

export const explorationSchema = new Schema<IExploration>({
  active: {
    type: Boolean,
    default: true,
  },
  seed: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  currentStage: {
    type: Number,
    default: -1,
  },
  storyID: {
    type: Schema.Types.ObjectId,
    ref: 'Story',
  },
});

export default model<IExploration>('Exploration', explorationSchema);
