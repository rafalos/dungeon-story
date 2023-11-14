import { Schema, model } from 'mongoose';
export interface ICharacter {
  name: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
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
});

export default model<ICharacter>('Character', characterSchema);
