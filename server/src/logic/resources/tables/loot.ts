import { ClassType, GemType } from '../../../types';

export const EQUIPMENT_RARITY_CHANCES: [ClassType, number][] = [
  ['common', 60],
  ['magic', 25],
  ['rare', 12],
  ['legendary', 3],
];

export const GEM_RARITY_CHANCES: [GemType, number][] = [
  ['jewel', 90],
  ['crystal', 10],
];

export const LOOT_BRACKERS = {
  MONSTER: {
    equipment: {
      ROLLS: 2,
      CHANCE: 30,
    },
    gem: {
      ROLLS: 5,
      CHANCE: 30,
    },
    potion: {
      ROLLS: 2,
      CHANCE: 30,
    },
  },
};
