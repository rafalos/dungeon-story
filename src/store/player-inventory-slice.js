import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
import { generateNewHealthPotion } from '../Logic/Generator/HealthPotion';
import { generateRandomGem } from '../Logic/Generator/Gem';
import { playerStatusActions } from './player-status-slice';
import { ITEM_TYPES } from '../utils/contants';
const initialItemInstances = [
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewEquipmentItem(),
  generateNewHealthPotion(),
  generateRandomGem(),
  generateRandomGem(),
  generateRandomGem(),
  generateRandomGem(),
  generateRandomGem(),
];

const initialItems = initialItemInstances.map((item) => {
  return { ...item };
});

const playerInventorySlice = createSlice({
  name: 'player-inventory',
  initialState: {
    items: initialItems,
  },
  reducers: {
    deductStackable(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.itemID
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
      state.items = state.items.concat(action.payload.items);
    },
  },
});

export const itemSold = (item) => {
  const { sellPrice } = item;

  return (dispatch) => {
    switch (item.type) {
      case ITEM_TYPES.GEM:
      case ITEM_TYPES.POTION:
        dispatch(
          playerInventoryActions.deductStackable({
            itemID: item.id,
          })
        );
        break;
      case ITEM_TYPES.GEAR:
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
