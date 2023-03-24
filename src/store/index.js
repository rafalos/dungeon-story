import { configureStore } from '@reduxjs/toolkit';
import playerStatusReducer from './player-status-slice';
import playerInventoryReducer from './player-inventory-slice';

const store = configureStore({
  reducer: {
    player: playerStatusReducer,
    inventory: playerInventoryReducer,
  },
});

export default store;
