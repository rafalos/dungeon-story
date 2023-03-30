import { createSlice } from '@reduxjs/toolkit';
import { TIMERS } from '../utils/contants';

const timersSlice = createSlice({
  name: 'timers',
  initialState: {
    shop: TIMERS.SHOP.AMOUNT,
  },
  reducers: {
    deductTimer(state, action) {
      state[action.payload]--;
    },

    resetTimer(state, action) {
      console.log(action)
      state[action.payload.timer] = action.payload.amount;
    },
  },
});

export default timersSlice.reducer;
export const timersActions = timersSlice.actions;
