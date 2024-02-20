import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { playerStatusActions } from './player-status-slice';
import { ITEM_TYPES } from '../utils/contants';
import { isStackable } from '../utils/constraints';
import { playerStatisticActions } from './player-statistics-slice';
import { Inventory, type Equipment } from '@/types';
import { getInventory } from '@/services/user';

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
      console.log(action);
    });
  },
  reducers: {
    deductStackable(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.amount > 1) {
        existingItem.amount--;
      } else {
        const index = state.items.indexOf(existingItem);
        state.items.splice(index, 1);
      }
    },
    addStackable(state, action) {},
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
    addSingleItem(state, action) {
      state.items.push(action.payload.item);
    },
    addMultipleItems(state, action) {
      for (const item of action.payload.items) {
        if (isStackable(item)) {
          const existingItem = state.items.findIndex(
            (playerItem) => playerItem.id === item.id
          );
          if (existingItem == -1) {
            state.items.push(item);
          } else {
            state.items[existingItem].amount += 1;
          }
        } else {
          state.items.push(item);
        }
      }
    },
  },
});

export const potionUsed = (item) => {
  return (dispatch) => {
    dispatch(
      playerInventoryActions.deductStackable({
        id: item.id,
      })
    );
    dispatch(
      playerStatisticActions.restoreHealth({
        amount: 50,
      })
    );
  };
};

export const itemSold = (item) => {
  const { sellPrice } = item;
  return (dispatch) => {
    switch (item.type) {
      case ITEM_TYPES.GEM:
      case ITEM_TYPES.POTION:
        dispatch(
          playerInventoryActions.deductStackable({
            id: item.id,
          })
        );
        break;
      case ITEM_TYPES.EQUIPMENT:
        dispatch(
          playerInventoryActions.removeItem({
            id: item.id,
          })
        );
        break;
    }
    dispatch(
      playerStatusActions.addGold({
        amount: sellPrice,
      })
    );
  };
};

export default playerInventorySlice.reducer;
export const playerInventoryActions = playerInventorySlice.actions;