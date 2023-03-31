import { createSlice } from '@reduxjs/toolkit';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';

const explorationSlice = createSlice({
  name: 'exploration',
  initialState: {
    seed: [],
    currentPosition: null,
  },
  reducers: {
    initialize(state) {
      state.seed = generateSeed();
    },
  },
});

export default explorationSlice.reducer;
export const explorationActions = explorationSlice.actions;
