import mongoose, { Schema, Types, model } from 'mongoose';
import { ExplorationSeed } from '../types';

export interface IExploration {
  seed: ExplorationSeed;
  currentStage: number;
  playerID: Types.ObjectId;
}

export const explorationSchema = new Schema<IExploration>({
  seed: [],
  playerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  },
  currentStage: {
    type: Number,
    default: -1,
  },
});

export default model<IExploration>('Exploration', explorationSchema);
