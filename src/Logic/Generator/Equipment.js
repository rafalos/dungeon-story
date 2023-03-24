import ItemSlotTypes from './ItemSlotTypes';
import MetaBuilder from './MetaBuilder';
import { v4 as uuidv4 } from 'uuid';
import { randomElementFromArray } from '../../utils/random';

class Equipment {
  constructor() {
    const base = JSON.parse(
      JSON.stringify(randomElementFromArray(ItemSlotTypes)[0])
    ); // deep copy of item performed
    const finalItem = { ...MetaBuilder.generateMetadata(base) };
    const { name, slot, ...affixes } = finalItem;
    this.name = name;
    this.equipmentSlot = slot;
    this.id = uuidv4();
    for (const [key, value] of Object.entries(affixes)) {
      this[key] = value;
    }
  }
}

export const generateNewEquipmentItem = () => {
  return new Equipment();
};
