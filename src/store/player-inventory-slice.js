import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
import { generateNewHealthPotion } from '../Logic/Generator/HealthPotion';
const initialItemInstances = [
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewHealthPotion(),
];

const initialItems = initialItemInstances.map((item) => {
  return { ...item };
});

const playerInventorySlice = createSlice({
  name: 'player-inventory',
  initialState: {
    items: initialItems,
  },
  reducers: {
    deductStackable(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.itemID
      );

      if (existingItem.amount > 1) {
        existingItem.amount--;
      } else {
        const index = state.items.indexOf(existingItem);
        state.items.splice(index, 1);
      }
    },
    addStackable(state, action) {},
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
    addSingleItem(state, action) {
      state.items.push(action.payload.item);
    },
    addMultipleItems(state, action) {
      state.items = state.items.concat(action.payload.items);
    },
  },
});

export default playerInventorySlice.reducer;
export const playerInventoryActions = playerInventorySlice.actions;
