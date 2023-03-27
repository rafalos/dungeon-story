import { createSlice } from '@reduxjs/toolkit';
import Classes from '../Logic/Resources/Classes';

const playerStatisticsSlice = createSlice({
  name: 'player-statistics',
  initialState: {
    minDamage: 5,
    maxDamage: 10,
    currentHealth: 200,
    maxHealth: 200,
    attributes: {
      strength: 5,
      dexterity: 3,
      intelligence: 3,
      vitality: 5,
      fortune: 0,
    },
  },
  reducers: {
    increaseStat(state, action) {
      state.attributes[action.payload.statistic] += action.payload.amount;
    },
    takeDamage(state, action) {
      state.currentHealth -= action.payload.amount;
    },
    restorePlayer(state) {
      state.currentHealth = state.maxHealth;
    },
  },
});

export default playerStatisticsSlice.reducer;
export const playerStatisticActions = playerStatisticsSlice.actions;
