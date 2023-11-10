import { IEquipment } from './models/Equipment';

type ItemType = 'equipment' | 'potion' | 'gem';
export type GemType = 'crystal' | 'jewel';
export type SlotType = 'head' | 'torso' | 'legs' | 'boots' | 'ring' | 'weapon';
export type ClassType = 'common' | 'magic' | 'rare' | 'legendary';
export type ExplorationEvent = 'battle' | 'trap' | 'treasure' | 'well';

export type Affix =
  | 'criticalChance'
  | 'dexterity'
  | 'vitality'
  | 'intelligence'
  | 'dodgeChance'
  | 'fortune'
  | 'strength'
  | 'defense'
  | 'fortune';

export interface IItem {
  name: string;
  type: ItemType;
  icon: string;
  sellPrice: number;
}

export interface Story {
  explorationID: string;
  chapters: string[];
}

export type Modifier = [Affix, number];

interface Stackable extends IItem {
  amount: number;
}

export interface Gem extends Stackable {
  type: 'gem';
}

interface Potion extends Stackable {
  type: 'potion';
}

export type ExplorationSeed = Array<ExplorationEvent>;

export type EquipmentBase = Omit<
  IEquipment,
  'price' | 'sellPrice' | 'type' | 'classType'
>;
export type EquipmentWithMetadata = Omit<IEquipment, 'type' | 'sellPrice'>;
