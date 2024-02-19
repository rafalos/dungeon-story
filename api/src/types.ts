import { Types } from 'mongoose';

export interface Item {
  name: string;
  type: ItemType;
  icon: string;
  sellPrice: number;
}
export interface EquipmentBase extends Item {
  modifiers?: Modifier[];
  type: 'equipment';
  slot: SlotType;
  classType: ClassType;
  owner?: Types.ObjectId | null;
}

interface Jewelry extends EquipmentBase {
  descriptor: 'jewelery';
}

interface Weapon extends EquipmentBase {
  damage: number;
  descriptor: 'weapon';
}

interface Wearable extends EquipmentBase {
  armor: number;
  descriptor: 'wearable';
}

export type Equipment = Weapon | Wearable | Jewelry;

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

export interface Story {
  explorationID: string;
  chapters: string[];
}

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
export type EquipmentBlueprint = DistributiveOmit<
  EquipmentPregenerate,
  'modifiers' | 'sellPrice' | 'owner'
>;
