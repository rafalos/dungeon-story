import {
  EQUIPMENT_RARITIES,
  GEM_RARITIES,
  ITEM_TYPES,
} from '../../../utils/contants';

export const RARITY_CHANCES = {
  EQUIPMENT: [
    [EQUIPMENT_RARITIES.COMMON, 40],
    [EQUIPMENT_RARITIES.MAGIC, 35],
    [EQUIPMENT_RARITIES.RARE, 25],
    [EQUIPMENT_RARITIES.LEGENDARY, 5],
  ],
  GEM: [
    [GEM_RARITIES.JEWEL, 90],
    [GEM_RARITIES.CRYSTAL, 10],
  ],
};

export const LOOT_BRACKERS = {
  MONSTER: {
    [ITEM_TYPES.EQUIPMENT]: {
      ROLLS: 2,
      CHANCE: 30,
    },
    [ITEM_TYPES.GEM]: {
      ROLLS: 5,
      CHANCE: 30,
    },
    [ITEM_TYPES.POTION]: {
      ROLLS: 2,
      CHANCE: 30,
    },
  },
};
