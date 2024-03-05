import { z } from 'zod';
import {
  EquipmentSchema,
  InventorySchema,
  MoveStateSchema,
  StoriesSchema,
  StorySchema,
  UserSchema,
} from './schemas';
import { Types } from 'mongoose';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UnknownAction } from 'redux';

export type User = z.infer<typeof UserSchema>;
export type Equipment = z.infer<typeof EquipmentSchema>;
export type Inventory = z.infer<typeof InventorySchema>;
export type Stories = z.infer<typeof StoriesSchema>;
export type Story = z.infer<typeof StorySchema>;
export type MoveState = z.infer<typeof MoveStateSchema>;

export interface Item {
  name: string;
  type: ItemType;
  icon: string;
  sellPrice: number;
  buyPrice: number;
}
export interface EquipmentBase extends Item {
  modifiers?: Modifier[];
  type: 'equipment';
  slot: SlotType;
  classType: ClassType;
  owner?: Types.ObjectId | null;
}

type ItemType = 'equipment' | 'potion' | 'gem';
export type GemType = 'crystal' | 'jewel';
export type SlotType = 'head' | 'torso' | 'legs' | 'boots' | 'ring' | 'weapon';
export type ClassType = 'common' | 'magic' | 'rare' | 'legendary';
export type ExplorationEvent =
  | 'battle'
  | 'trap'
  | 'treasure'
  | 'well'
  | 'death'
  | 'entry'
  | 'ending';

export type Affix = 'vitality' | 'strength' | 'agility';

export type Modifier = [Affix, number];

interface Stackable extends Item {
  amount: number;
}

export interface Gem extends Stackable {
  type: 'gem';
}

interface Potion extends Stackable {
  type: 'potion';
}

export type ExplorationSeed = Array<ExplorationEvent>;

type DistributiveOmit<T, K extends keyof T> = T extends any
  ? Omit<T, K>
  : never;

export type EquipmentPregenerate = DistributiveOmit<
  Equipment,
  'type' | 'classType'
>;
export type EquipmentWithMetadata = DistributiveOmit<Equipment, 'type'>;

export type Operation = 'INC' | 'DEC';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
