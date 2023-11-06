import {
  EQUIPMENT_RARITIES,
  GEM_RARITIES,
  ITEM_TYPES,
} from '../../../utils/constants';

export const RARITY_CHANCES = {
  EQUIPMENT: [
    [EQUIPMENT_RARITIES.COMMON, 60],
    [EQUIPMENT_RARITIES.MAGIC, 25],
    [EQUIPMENT_RARITIES.RARE, 12],
    [EQUIPMENT_RARITIES.LEGENDARY, 3],
  ],
  GEM: [
    [GEM_RARITIES.JEWEL, 90],
    [GEM_RARITIES.CRYSTAL, 10],
  ],
};

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
