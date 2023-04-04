import { ITEM_TYPES } from '../../utils/contants';
import { randomInRange, randomWithProbability } from '../../utils/random';
import { generateNewEquipmentItem } from './Equipment';
import { generateRandomGem } from './gem';
import { generateNewHealthPotion } from './healthPotion';

export const generateLoot = (bracket) => {
  const droppedItems = [];
  for (const key in bracket) {
    const { CHANCE, ROLLS } = bracket[key];
    for (let index = 0; index < ROLLS; index++) {
      const dropped = randomWithProbability([
        [true, CHANCE],
        [false, 100 - CHANCE],
      ]);
      if (dropped) {
        switch (key) {
          case ITEM_TYPES.EQUIPMENT:
            const item = generateNewEquipmentItem();
            droppedItems.push(item);
            break;
          case ITEM_TYPES.GEM:
            const gem = generateRandomGem();
            droppedItems.push(gem);
            break;
          case ITEM_TYPES.POTION:
            const potion = generateNewHealthPotion();
            droppedItems.push(potion);
            break;
        }
      }
    }
  }
  return droppedItems;
};
