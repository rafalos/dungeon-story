import { Schema, model } from 'mongoose';
export interface IPlayer {
  name: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
}

const playerSchema = new Schema<IPlayer>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  energy: {
    type: Number,
    required: true,
  },
  experience: Number,
  gold: Number,
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
});

export default model<IPlayer>('Player', playerSchema);
