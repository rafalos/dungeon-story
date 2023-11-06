type ItemType = 'equipment' | 'potion' | 'gem';
type SlotType = 'head' | 'torso' | 'legs' | 'boots' | 'ring' | 'weapon';
export type ClassType = 'common' | 'magic' | 'rare' | 'legendary';

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

export interface IShop {
  items: IEquipment[];
  lastRefreshed: string;
}
export interface IPlayer {
  name: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
}

interface IItem {
  name: string;
  type: ItemType;
  icon: string;
  sellPrice: number;
}

type Modifier = [Affix, number];

interface Stackable extends IItem {
  amount: number;
}

export interface IEquipment extends IItem {
  modifiers: Modifier[];
  type: 'equipment';
  slot: SlotType;
  classType: ClassType;
  owner?: string;
}

export interface Gem extends Stackable {
  type: 'gem';
}

interface Potion extends Stackable {
  type: 'potion';
}

export type EquipmentBase = Omit<
  IEquipment,
  'price' | 'sellPrice' | 'type' | 'classType'
>;
export type EquipmentWithMetadata = Omit<IEquipment, 'type' | 'sellPrice'>;
