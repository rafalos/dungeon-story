import { z } from 'zod';

const EquipmentPreSchema = z.object({
  id: z.string(),
  icon: z.string(),
  modifiers: z.array(z.tuple([z.string(), z.number()])).max(3),
  name: z.string(),
  sellPrice: z.number(),
  buyPrice: z.number(),
  type: z.literal('equipment'),
  slot: z.union([
    z.literal('head'),
    z.literal('torso'),
    z.literal('legs'),
    z.literal('boots'),
    z.literal('ring'),
    z.literal('weapon'),
  ]),
  classType: z.union([
    z.literal('common'),
    z.literal('magic'),
    z.literal('rare'),
    z.literal('legendary'),
  ]),
});

export const EquipmentSchema = z.discriminatedUnion('descriptor', [
  z
    .object({
      descriptor: z.literal('weapon'),
      damage: z.number(),
    })
    .merge(EquipmentPreSchema),
  z
    .object({
      descriptor: z.literal('wearable'),
      armor: z.number(),
    })
    .merge(EquipmentPreSchema),
  z
    .object({
      descriptor: z.literal('jewelery'),
    })
    .merge(EquipmentPreSchema),
]);

export const LogItemSchema = z.object({
  dealt: z.number(),
  playerHealth: z.number(),
  monsterHealth: z.number(),
});

export const EntitySchema = z.object({
  health: z.number(),
  name: z.string(),
  spritesheet: z.string().optional(),
  damage: z.number(),
  armor: z.number(),
  strength: z.number(),
  vitality: z.number(),
  experienceYield: z.number().optional(),
});

export const LogSchema = z.object({
  startingHealth: z.number(),
  enemy: EntitySchema,
  winner: z.string(),
  log: z.array(LogItemSchema),
});

export const MoveStateSchema = z.object({
  healthDiff: z.number(),
  experienceGained: z.number(),
  itemsFound: z.array(EquipmentSchema),
  battleLog: LogSchema.optional(),
});

export const StorySchema = z.object({
  chapters: z.array(z.string()),
  published: z.boolean(),
  location: z.string(),
  createdAt: z.string().transform((string) => new Date(string)),
  id: z.string(),
});

export const StoriesSchema = z.array(StorySchema);
export const ShopSchema = z.object({
  id: z.string(),
  items: z.array(EquipmentSchema),
  nextRefresh: z.string(),
});

export const InventorySchema = z.object({
  equipment: z.array(EquipmentSchema),
  worn: z.array(EquipmentSchema),
  id: z.string(),
});

export const UserSchema = z.object({
  email: z.string(),
  energy: z.number(),
  experience: z.number(),
  level: z.number(),
  gold: z.number(),
  maxExperience: z.number(),
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
