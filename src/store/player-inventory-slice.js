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
    addSingleItem(state, action) {},
    addMultipleItems(state, action) {
      console.log(action.payload.items);
      state.items = state.items.concat(action.payload.items);
    },
  },
});

export default playerInventorySlice.reducer;
export const playerInventoryActions = playerInventorySlice.actions;
