import { randomInRange, randomElementFromArray } from '../../Utils/Random';
import affixTable from './AffixTable';
import ItemClassTypes from './ItemClassTypes';

export default class MetaBuilder {
  static generateMetadata(baseItem) {
    const metaItem = { ...baseItem };
    const randomItemClass = randomElementFromArray(ItemClassTypes);
    const { affixRolls, classType } = randomItemClass;
    metaItem.classType = classType;
    let affixRollAmount = randomInRange(affixRolls.min, affixRolls.max);
    if (affixRollAmount) {
      const randomPrimaryAffix = randomElementFromArray(affixTable.primary);
      metaItem.metadata[randomPrimaryAffix.stat] = randomInRange(
        randomPrimaryAffix.range.min,
        randomPrimaryAffix.range.max,
      );
      metaItem.itemName = `${randomPrimaryAffix.name} ${metaItem.itemName}`;
    }
    affixRollAmount -= 1;
    for (let i = 0; i <= affixRollAmount; i += 1) {
      const randomSecondaryAffix = randomElementFromArray(affixTable.secondary);
      metaItem.metadata[randomSecondaryAffix.stat] = randomInRange(
        randomSecondaryAffix.range.min,
        randomSecondaryAffix.range.max,
      );
    }
    return metaItem;
  }
}
