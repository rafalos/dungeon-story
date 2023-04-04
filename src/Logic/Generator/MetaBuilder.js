import {
  randomInRange,
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import affixTable from '../Resources/tables/affixTable';
import { EquipmentClassTypes } from './equipmentClassTypes';
import { RARITY_CHANCES } from '../../utils/contants';

const generateItemRarity = () => {
  return randomWithProbability(RARITY_CHANCES.EQUIPMENT);
};

export const generateMetaData = (baseItem) => {
  const metaItem = { ...baseItem };
  const itemRarity = generateItemRarity();
  const randomItemClass = EquipmentClassTypes[itemRarity];
  const { affixRolls } = randomItemClass;
  metaItem.classType = itemRarity;
  let affixRollAmount = randomInRange(affixRolls.min, affixRolls.max);
  if (affixRollAmount) {
    const randomPrimaryAffix = randomElementFromArray(affixTable.primary);
    metaItem.metadata[randomPrimaryAffix.stat] = randomInRange(
      randomPrimaryAffix.range.min,
      randomPrimaryAffix.range.max
    );
    metaItem.name = `${randomPrimaryAffix.name} ${metaItem.name}`;
  }
  affixRollAmount -= 1;
  for (let i = 0; i <= affixRollAmount; i += 1) {
    const randomSecondaryAffix = randomElementFromArray(affixTable.secondary);
    metaItem.metadata[randomSecondaryAffix.stat] = randomInRange(
      randomSecondaryAffix.range.min,
      randomSecondaryAffix.range.max
    );
  }
  return metaItem;
};
