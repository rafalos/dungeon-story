import { createSlice } from '@reduxjs/toolkit';
import LevelBrackets from '../Logic/Resources/tables/levelTable';
import playerIcon from '../Logic/Resources/Icons/Class/Hero.png';

const playerStatusSlice = createSlice({
  name: 'player-status',
  initialState: {
    name: 'Rafal',
    icon: playerIcon,
    statPoints: 3,
    maxHealth: 250,
    currentHealth: 210,
    energy: 10,
    gold: 300,
    class: 'Knight',
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
