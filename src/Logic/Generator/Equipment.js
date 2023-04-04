import equipmentSlotTypes from './equipmentSlotTypes';
import { generateMetaData } from './MetaBuilder';
import { v4 as uuidv4 } from 'uuid';
import { randomElementFromArray } from '../../utils/random';
import { ITEM_TYPES } from '../../utils/contants';

class Equipment {
  constructor() {
    const base = JSON.parse(
      JSON.stringify(randomElementFromArray(equipmentSlotTypes)[0])
    ); // deep copy of item performed
    const finalItem = { ...generateMetaData(base) };
    const { name, slot, ...affixes } = finalItem;
    this.name = name;
    this.type = ITEM_TYPES.EQUIPMENT;
    this.entityType = this.equipmentSlot = slot;
    this.id = uuidv4();
    this.sellPrice = 10;
    for (const [key, value] of Object.entries(affixes)) {
      this[key] = value;
    }
  }
}

export const generateNewEquipmentItem = () => {
  return new Equipment();
};
