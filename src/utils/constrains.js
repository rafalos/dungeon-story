import { ITEM_TYPES } from './contants';

const STACKABLE_ITEM_TYPES = [ITEM_TYPES.POTION];

export const isStackable = (itemType) =>
  STACKABLE_ITEM_TYPES.includes(itemType);
