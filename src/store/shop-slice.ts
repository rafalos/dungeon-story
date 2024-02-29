import { getCurrentShop } from '@/services/shop';
import { Equipment } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';
import { ShopSchema } from '@/schemas';

interface ShopState {
  items: Equipment[];
}

const initialState = {
  items: [],
} as ShopState;

export const fetchShop = createAsyncThunk<z.infer<typeof ShopSchema>, void>(
  'shop/fetchSgop',
  async () => {
    const shop = await getCurrentShop();

    return shop;
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Equipment[]>) {
      state.items = action.payload;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShop.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchShop.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

export default shopSlice.reducer;
export const { setItems, removeItem } = shopSlice.actions;
