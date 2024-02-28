import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Inventory, type Equipment, AppThunk, Modifier } from '@/types';
import { getInventory } from '@/services/user';
import {
  addGold,
  deductGold,
  increaseArmor,
  increaseAttributes,
  increaseDamage,
} from './user-slice';

interface InventoryState {
  worn: Equipment[];
  equipment: Equipment[];
}

const initialState = {
  worn: [],
  equipment: [],
} as InventoryState;

export const fetchInventory = createAsyncThunk<Inventory, void>(
  'inventory/fetchInventory',
  async () => {
    const inventory = await getInventory();

    return inventory;
  }
);

const playerInventorySlice = createSlice({
  name: 'inventory',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchInventory.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  reducers: {
    addInventoryItems(state, { payload }: PayloadAction<Equipment[]>) {
      state.equipment.push(...payload);
    },
    addInventoryItem(state, { payload }: PayloadAction<Equipment>) {
      state.equipment.push(payload);
    },
    removeInventoryItem(state, { payload }: PayloadAction<string>) {
      const itemIndex = state.equipment.findIndex(
        (item) => item.id === payload
      );
      if (itemIndex > -1) {
        state.equipment.splice(itemIndex, 1);
      }
    },
    addWornItem(state, { payload }: PayloadAction<Equipment>) {
      state.worn.push(payload);
    },
    removeWornItem(state, { payload }: PayloadAction<string>) {
      const itemIndex = state.worn.findIndex((item) => item.id === payload);
      if (itemIndex > -1) {
        state.worn.splice(itemIndex, 1);
      }
    },
  },
});

export default playerInventorySlice.reducer;
export const {
  addInventoryItem,
  removeInventoryItem,
  addWornItem,
  removeWornItem,
} = playerInventorySlice.actions;

export const itemBought = (item: Equipment): AppThunk => {
  const { buyPrice } = item;

  return (dispatch) => {
    dispatch(addInventoryItem(item));
    dispatch(deductGold(buyPrice));
  };
};

export const itemSold = (item: Equipment): AppThunk => {
  const { id, sellPrice } = item;

  return (dispatch) => {
    dispatch(addGold(sellPrice));
    dispatch(removeInventoryItem(id));
  };
};

export const equippedItem = (item: Equipment): AppThunk => {
  return (dispatch) => {
    dispatch(addWornItem(item));
    dispatch(removeInventoryItem(item.id));

    switch (item.descriptor) {
      case 'weapon':
        dispatch(
          increaseDamage({
            operation: 'INC',
            value: item.damage,
          })
        );
        break;
      case 'wearable':
        dispatch(
          increaseArmor({
            operation: 'INC',
            value: item.armor,
          })
        );
        break;
    }

    dispatch(
      increaseAttributes({
        operation: 'INC',
        modifiers: item.modifiers as Modifier[],
      })
    );
  };
};

export const unequippedItem = (item: Equipment): AppThunk => {
  return (dispatch) => {
    dispatch(removeWornItem(item.id));
    dispatch(addInventoryItem(item));

    switch (item.descriptor) {
      case 'weapon':
        dispatch(
          increaseDamage({
            operation: 'DEC',
            value: item.damage,
          })
        );
        break;
      case 'wearable':
        dispatch(
          increaseArmor({
            operation: 'DEC',
            value: item.armor,
          })
        );
        break;
    }

    dispatch(
      increaseAttributes({
        operation: 'DEC',
        modifiers: item.modifiers as Modifier[],
      })
    );
  };
};
