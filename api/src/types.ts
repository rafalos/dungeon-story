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
  icon: string;
  sellPrice: number;
}

type Modifier = [Affix, number];

interface Stackable extends Item {
  amount: number;
}

interface Equipment extends Item {
  modifiers: Modifier[];
}
