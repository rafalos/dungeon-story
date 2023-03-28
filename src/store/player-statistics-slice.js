import { createSlice } from '@reduxjs/toolkit';
import { STATISTICS } from '../utils/contants';

const ATTRIBUTES_LIST = [
  STATISTICS.ATTRIBUTES.DEXTERITY,
  STATISTICS.ATTRIBUTES.FOTRUNE,
  STATISTICS.ATTRIBUTES.INTELLIGENCE,
  STATISTICS.ATTRIBUTES.VITALITY,
  STATISTICS.ATTRIBUTES.STRENGTH,
];

const playerStatisticsSlice = createSlice({
  name: 'player-statistics',
  initialState: {
    minDamage: 5,
    critChance: 5,
    maxDamage: 10,
    currentHealth: 200,
    maxHealth: 200,
    dodgeChance: 5,
    defense: 0,
    attributes: {
      strength: 5,
      dexterity: 3,
      intelligence: 3,
      vitality: 5,
      fortune: 0,
    },
  },
  reducers: {
    changeStatistic(state, action) {
      for (const statisticItem of action.payload.statistics) {
        const [statistic, amount] = statisticItem;

        if (ATTRIBUTES_LIST.includes(statistic)) {
          state.attributes[statistic] += amount;
        }

        switch (statistic) {
          case STATISTICS.DEFENSE:
            state.defense += amount;
          case STATISTICS.STRENGTH:
            state.minDamage += 1 * amount;
            state.maxDamage += 1 * amount;
            break;
          case STATISTICS.VITALITY:
            state.maxHealth += 10 * amount;
            break;
          case STATISTICS.DEXTERITY:
            state.dodgeChance += 0.2 * amount;
            break;
          case STATISTICS.FOTRUNE:
            state.critChance += 0.2 * amount;
            break;
        }
      }
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
