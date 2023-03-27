import { createSlice } from '@reduxjs/toolkit';
import LevelBrackets from '../Logic/Resources/LevelBrackets';

const playerStatusSlice = createSlice({
  name: 'player-status',
  initialState: {
    name: 'Rafal',
    statPoints: 3,
    maxHealth: 250,
    currentHealth: 210,
    damage: {
      min: 5,
      max: 10,
    },
    energy: 10,
    class: 'Knight',
    level: 1,
    experience: 0,
    maxExperience: LevelBrackets[0],
  },
  reducers: {
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
