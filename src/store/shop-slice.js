import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
import { timersActions } from './timers-slice';
import { playerStatusActions } from './player-status-slice';
import { TIMERS } from '../utils/contants';

const initialItem = generateNewEquipmentItem();

const initialItems = [
  {
    item: { ...initialItem },
    price: 20,
  },
];

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    items: [...initialItems],
  },
  reducers: {
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId
      );

      state.items.splice(itemIndex, 1);
    },
    resetShop(state) {
      const newItems = [
        {
          item: generateNewEquipmentItem(),
          price: 10,
        },
      ];

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
  };
};

export default shopSlice.reducer;
export const shopActions = shopSlice.actions;
