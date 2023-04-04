import { EQUIPMENT_RARITIES } from '../../utils/contants';

export const EquipmentClassTypes = {
  [EQUIPMENT_RARITIES.LEGENDARY]: {
    affixRolls: { min: 5, max: 5 },
  },
  [EQUIPMENT_RARITIES.RARE]: {
    affixRolls: { min: 2, max: 5 },
  },
  [EQUIPMENT_RARITIES.MAGIC]: {
    affixRolls: { min: 1, max: 3 },
  },
  [EQUIPMENT_RARITIES.COMMON]: {
    affixRolls: { min: 0, max: 0 },
  },
};
