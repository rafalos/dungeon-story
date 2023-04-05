import { createSlice } from '@reduxjs/toolkit';
import LevelBrackets from '../Logic/Resources/tables/levelTable';

const playerStatusSlice = createSlice({
  name: 'player-status',
  initialState: {
    name: 'Rafal',
    statPoints: 0,
    energy: 10,
    gold: 0,
    level: 1,
    experience: 0,
    maxExperience: LevelBrackets[0],
  },
  reducers: {
    addGold(state, action) {
      state.gold += action.payload.amount;
    },
    deductGold(state, action) {
      state.gold -= action.payload.amount;
    },
    useStatpoint(state) {
      state.statPoints--;
    },
    addExperience(state, action) {
      state.experience += action.payload.experience;

      if (state.experience >= state.maxExperience) {
        state.level++;
        state.statPoints += 3;
        state.experience = 0;
        state.maxExperience = LevelBrackets[state.level - 1];
      }
    },
  },
});

export default playerStatusSlice.reducer;
export const playerStatusActions = playerStatusSlice.actions;
