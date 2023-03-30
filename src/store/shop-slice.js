import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';

const initialItem = generateNewEquipmentItem()

const initialItems = [
  {
    item: {...initialItem},
    price: 20,
  },
];

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    timeToRefresh: 10,
    items: [...initialItems],
  },
  reducers: {
    resetShop(state) {
      state.timeToRefresh = 10;
    },
    deductSecondFromTimer(state) {
      state.timeToRefresh -= 1;
    },
  },
});

export default shopSlice.reducer;
export const shopActions = shopSlice.actions;
