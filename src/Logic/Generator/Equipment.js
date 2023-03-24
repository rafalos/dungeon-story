import ItemSlotTypes from './ItemSlotTypes';
import MetaBuilder from './MetaBuilder';
import { randomElementFromArray } from '../../Utils/Random';

export default class Equipment {
  constructor() {
    const base = JSON.parse(
      JSON.stringify(randomElementFromArray(ItemSlotTypes)[0]),
    ); // deep copy of item performed
    const finalItem = { ...MetaBuilder.generateMetadata(base) };
    const { itemName, slot, ...affixes } = finalItem;
    this.itemName = itemName;
    this.equipmentSlot = slot;
    for (const [key, value] of Object.entries(affixes)) {
      this[key] = value;
    }
  }
}
