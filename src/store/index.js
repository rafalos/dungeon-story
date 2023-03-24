import { configureStore, createSlice } from '@reduxjs/toolkit';

const playerStatusSlice = createSlice({
  name: 'player-status',
  initialState: {
    name: 'Rafal',
    health: 250,
    currentHealth: 210,
    energy: 10,
    class: 'Knight',
  },
  reducers: {
    takeDamage(state, action) {
      state.currentHealth = state.currentHealth - action.payload.amount;
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
