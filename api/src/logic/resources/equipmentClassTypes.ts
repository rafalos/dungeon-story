import { EQUIPMENT_RARITIES } from '../../utils/constants';

export const EquipmentClassTypes = {
  [EQUIPMENT_RARITIES.LEGENDARY]: {
    affixRolls: 3,
    sellPrice: {
      min: 100,
      max: 170,
    },
  },
  [EQUIPMENT_RARITIES.RARE]: {
    affixRolls: 2,
    sellPrice: {
      min: 20,
      max: 50,
    },
  },
  [EQUIPMENT_RARITIES.MAGIC]: {
    affixRolls: 1,
    sellPrice: {
      min: 5,
      max: 10,
    },
  },
  [EQUIPMENT_RARITIES.COMMON]: {
    affixRolls: 0,
    sellPrice: {
      min: 1,
      max: 5,
    },
  },
};
