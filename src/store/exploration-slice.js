import { createSlice } from '@reduxjs/toolkit';
import { getExplorations } from '../services/exploration';

const explorationSlice = createSlice({
  name: 'exploration',
  initialState: {
    seed: null,
    currentPosition: null,
    story: [],
  },
  reducers: {
    initialize(state, action) {
      state.seed = action.payload.seed;
      state.currentPosition = -1;
      state.story = action.payload.story;
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
  return async (dispatch) => {
    try {
      const { seed, story } = await getExplorations();
      dispatch(
        explorationActions.initialize({
          seed,
          story,
        })
      );
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Something went wrong');
      }
    }
  };
};

export default explorationSlice.reducer;
export const explorationActions = explorationSlice.actions;
