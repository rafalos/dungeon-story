import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string(),
  energy: z.number(),
  experience: z.number(),
  level: z.number(),
  maxExperience: z.number(),
  statPoints: z.number(),
  armor: z.number(),
  damage: z.number(),
  criticalChance: z.number(),
  id: z.string(),
  attributes: z.object({
    agility: z.number(),
    strength: z.number(),
    vitality: z.number(),
  }),
});
