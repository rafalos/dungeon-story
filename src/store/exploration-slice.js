import { createSlice } from '@reduxjs/toolkit';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';

const explorationSlice = createSlice({
  name: 'exploration',
  initialState: {
    seed: null,
    currentPosition: null,
  },
  reducers: {
    initialize(state) {
      state.seed = generateSeed();
      state.currentPosition = -1;
    },
    reset(state) {
      state.seed = null;
      state.currentPosition = null;
    },
    movePosition(state) {
      state.currentPosition++;
    },
  },
});

export default explorationSlice.reducer;
export const explorationActions = explorationSlice.actions;
