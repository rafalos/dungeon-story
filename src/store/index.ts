import { configureStore } from '@reduxjs/toolkit';
import playerStatusReducer from './player-status-slice';
import playerInventoryReducer from './player-inventory-slice';
import shopSlice from './shop-slice';
import modalSlice from './modal-slice';
import userSlice from './user-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    status: playerStatusReducer,
    inventory: playerInventoryReducer,
    shop: shopSlice,
    modal: modalSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
