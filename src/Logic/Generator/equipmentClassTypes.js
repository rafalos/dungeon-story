import { ITEM_RARITIES } from '../../utils/contants';

export default [
  {
    affixRolls: { min: 5, max: 5 },
    classType: ITEM_RARITIES.LEGENDARY,
  },
  {
    affixRolls: { min: 2, max: 5 },
    classType: ITEM_RARITIES.RARE,
  },
  {
    affixRolls: { min: 1, max: 3 },
    classType: ITEM_RARITIES.MAGIC,
  },
  {
    affixRolls: { min: 0, max: 0 },
    classType: ITEM_RARITIES.LEGENDARY,
  },
];
