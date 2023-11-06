import {
  randomInRange,
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import affixTable from '../resources/tables/affix';
import { EquipmentClassTypes } from '../resources/equipmentClassTypes';
import { RARITY_CHANCES } from '../resources/tables/loot';
import { ClassType, EquipmentBase, EquipmentWithMetadata } from '../../types';

const generateItemRarity = () => {
  return randomWithProbability(RARITY_CHANCES.EQUIPMENT);
};

export const generateMetaData = (
  baseItem: EquipmentBase
): EquipmentWithMetadata => {
  const metaItem = { ...baseItem };

  const itemRarity = generateItemRarity();
  const randomItemClass = EquipmentClassTypes[itemRarity];

  let affixRollAmount = randomInRange(
    randomItemClass.affixRolls.min,
    randomItemClass.affixRolls.max
  );

  if (affixRollAmount > 0) {
    const randomPrimaryAffix = randomElementFromArray(affixTable.primary);

    metaItem.modifiers.push([
      randomPrimaryAffix.stat,
      randomInRange(randomPrimaryAffix.range.min, randomPrimaryAffix.range.max),
    ]);

    metaItem.name = `${randomPrimaryAffix.name} ${metaItem.name}`;
    affixRollAmount -= 1;
  }

  for (let i = 0; i <= affixRollAmount; i += 1) {
    const randomSecondaryAffix = randomElementFromArray(affixTable.secondary);
    metaItem.modifiers.push([
      randomSecondaryAffix.stat,
      randomInRange(
        randomSecondaryAffix.range.min,
        randomSecondaryAffix.range.max
      ),
    ]);
  }

  return {
    ...metaItem,
    classType: itemRarity as ClassType,
  };
};
