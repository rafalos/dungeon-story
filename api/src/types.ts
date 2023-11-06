import { ITEM_TYPES } from './utils/constants';

type ItemType = 'equipment' | 'potion' | 'gem';

type Affix = 'criticalChance' | 'dodgeChance' | 'fortune';

export interface IPlayer {
  name: string;
  statPoints: 0;
  energy: number;
  gold: number;
  level: number;
  experience: number;
  maxExperience: number;
}

interface Item {
  name: string;
  type: ItemType;
  icon: string;
  sellPrice: number;
}

type Modifier = [Affix, number];

interface Stackable extends Item {
  amount: number;
}

interface Equipment extends Item {
  modifiers: Modifier[];
  type: 'equipment';
}

export interface Gem extends Stackable {
  type: 'gem';
}

interface Potion extends Stackable {
  type: 'potion';
}
