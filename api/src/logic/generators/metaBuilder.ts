import {
  randomInRange,
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import affixTable from '../resources/tables/affix';
import { EquipmentClassTypes } from '../resources/equipmentClassTypes';
import { EQUIPMENT_RARITY_CHANCES } from '../resources/tables/loot';
import {
  ClassType,
  EquipmentPregenerate,
  EquipmentWithMetadata,
} from '../../types';

const generateItemRarity = () => {
  return randomWithProbability(EQUIPMENT_RARITY_CHANCES);
};

export const generateMetaData = (
  baseItem: EquipmentPregenerate
): EquipmentWithMetadata => {
  const metaItem = { ...baseItem };
  metaItem.modifiers = metaItem.modifiers ?? [];

  const itemRarity = generateItemRarity();
  const randomItemClass = EquipmentClassTypes[itemRarity];
  const affixRolls = randomItemClass.affixRolls;

  if (affixRolls > 0) {
    let availableAffixes = affixTable.primary;

    for (let i = 0; i <= affixRolls - 1; i++) {
      const randomAffix = randomElementFromArray(availableAffixes);

      metaItem.modifiers.push([
        randomAffix.stat,
        randomInRange(randomAffix.range.min, randomAffix.range.max),
      ]);

      availableAffixes = availableAffixes.filter(
        (affix) => affix.name !== randomAffix.name
      );
    }
  }

  metaItem.sellPrice = randomInRange(
    randomItemClass.sellPrice.min,
    randomItemClass.sellPrice.max
  );

  // for (let i = 0; i <= affixRollAmount; i += 1) {
  //   const randomSecondaryAffix = randomElementFromArray(affixTable.secondary);
  //   metaItem.modifiers.push([
  //     randomSecondaryAffix.stat,
  //     randomInRange(
  //       randomSecondaryAffix.range.min,
  //       randomSecondaryAffix.range.max
  //     ),
  //   ]);
  // }

  return {
    ...metaItem,
    classType: itemRarity as ClassType,
  };
};
