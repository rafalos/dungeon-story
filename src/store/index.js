import { configureStore } from '@reduxjs/toolkit';
import playerStatusReducer from './player-status-slice';
import playerInventoryReducer from './player-inventory-slice';
import playerEquipmentReducer from './player-equipment-slice';
import playerStatisticsSlice from './player-statistics-slice';
import shopSlice from './shop-slice';
import timersSlice from './timers-slice';
import explorationSlice from './exploration-slice';

const store = configureStore({
  reducer: {
    status: playerStatusReducer,
    inventory: playerInventoryReducer,
    equipment: playerEquipmentReducer,
    statistics: playerStatisticsSlice,
    shop: shopSlice,
    timers: timersSlice,
    exploration: explorationSlice,
  },
});

export default store;
