import { ITEM_TYPES } from './contants';

const STACKABLE_ITEM_TYPES = [ITEM_TYPES.POTION, ITEM_TYPES.GEM];

export const isStackable = (item) => STACKABLE_ITEM_TYPES.includes(item.type);
