import { createSlice } from '@reduxjs/toolkit';
import Classes from '../Logic/Resources/Classes';

const playerStatisticsSlice = createSlice({
  name: 'player-statistics',
  initialState: {
    strength: 5,
    dexterity: 3,
    intelligence: 3,
    vitality: 5,
    fortune: 0,
  },
  reducers: {
    increaseStat(state, action) {
      state[action.payload.statistic] += action.payload.amount;
    },
  },
});

export default playerStatisticsSlice.reducer;
export const playerStatisticActions = playerStatisticsSlice.actions;
