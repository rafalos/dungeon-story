import { createSlice } from '@reduxjs/toolkit';
import { getExplorationSeed } from '../services/seed';

const explorationSlice = createSlice({
  name: 'exploration',
  initialState: {
    seed: null,
    currentPosition: null,
  },
  reducers: {
    initialize(state, action) {
      state.seed = action.payload;
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

export const initializeExploration = () => {
  let seed;
  return async (dispatch) => {
    try {
      seed = await getExplorationSeed();
    } catch (e) {
      if (e instanceof Error) {
        seed = ['battle', 'battle', 'well', 'treasure', 'trap'];
      }
      dispatch(explorationActions.initialize(seed));
    }
  };
};

export default explorationSlice.reducer;
export const explorationActions = explorationSlice.actions;
