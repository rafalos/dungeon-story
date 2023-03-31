import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
import { timersActions } from './timers-slice';
import { playerStatusActions } from './player-status-slice';
import { TIMERS } from '../utils/contants';
import { randomInRange } from '../utils/random';
import { playerInventoryActions } from './player-inventory-slice';

const generateRandomItems = () => {
  const randomItems = [
    generateNewEquipmentItem(),
    generateNewEquipmentItem(),
    generateNewEquipmentItem(),
    generateNewEquipmentItem(),
    generateNewEquipmentItem(),
  ];

  const result = randomItems.map((item) => {
    return {
      item: { ...item },
      price: randomInRange(10, 50),
    };
  });

  return result;
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    items: generateRandomItems(),
  },
  reducers: {
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId
      );

      state.items.splice(itemIndex, 1);
    },
    resetShop(state) {
      const newItems = generateRandomItems();

      state.items = newItems;
    },
  },
});

export const resetShop = () => {
  return (dispatch) => {
    dispatch(shopActions.resetShop());
    dispatch(
      timersActions.resetTimer({
        timer: TIMERS.SHOP.ID,
        amount: TIMERS.SHOP.AMOUNT,
      })
    );
  };
};

export const buyItem = (item, price) => {
  return (dispatch) => {
    dispatch(
      playerStatusActions.deductGold({
        amount: price,
      })
    );
    dispatch(
      shopActions.removeItem({
        itemID: item.id,
      })
    );
    dispatch(
      playerInventoryActions.addSingleItem({
        item: { ...item },
      })
    );
  };
};

export default shopSlice.reducer;
export const shopActions = shopSlice.actions;
