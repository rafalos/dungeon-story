import { configureStore, createSlice } from '@reduxjs/toolkit';

const playerStatusSlice = createSlice({
  name: 'player-status',
  initialState: {
    name: 'Rafal',
    maxHealth: 250,
    currentHealth: 210,
    energy: 10,
    class: 'Knight',
    level: 1,
    experience: 0,
  },
  reducers: {
    takeDamage(state, action) {
      state.currentHealth = state.currentHealth - action.payload.amount;
    },
    restorePlayer(state) {
      state.currentHealth = state.maxHealth;
    },
    addExperience(state, action) {
      state.experience += action.payload.experience;
    },
  },
});

const store = configureStore({
  reducer: {
    player: playerStatusSlice.reducer,
  },
});

export default store;
export const playerStatusActions = playerStatusSlice.actions;
