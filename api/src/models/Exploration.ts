import mongoose, { Schema, Types, model } from 'mongoose';
import { ExplorationSeed } from '../types';

export interface IExploration {
  seed: ExplorationSeed;
  currentStage: number;
  user: Types.ObjectId;
}

export const explorationSchema = new Schema<IExploration>({
  seed: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  currentStage: {
    type: Number,
    default: -1,
  },
});

export default model<IExploration>('Exploration', explorationSchema);
