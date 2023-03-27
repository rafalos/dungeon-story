import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
const initialItemInstances = [
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
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
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
    addSingleItem(state, action) {
      state.items.push(action.payload.item)
    },
    addMultipleItems(state, action) {
      state.items = state.items.concat(action.payload.items);
    },
  },
});

export default playerInventorySlice.reducer;
export const playerInventoryActions = playerInventorySlice.actions;
