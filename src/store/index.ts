import { configureStore } from '@reduxjs/toolkit';
import playerStatusReducer from './player-status-slice';
import playerInventoryReducer from './player-inventory-slice';
import playerEquipmentReducer from './player-equipment-slice';
import playerStatisticsSlice from './player-statistics-slice';
import shopSlice from './shop-slice';
import timersSlice from './timers-slice';
import explorationSlice from './exploration-slice';
import modalSlice from './modal-slice';
import userSlice from './user-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    status: playerStatusReducer,
    inventory: playerInventoryReducer,
    equipment: playerEquipmentReducer,
    statistics: playerStatisticsSlice,
    shop: shopSlice,
    timers: timersSlice,
    modal: modalSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
