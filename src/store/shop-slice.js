import { createSlice } from '@reduxjs/toolkit';
import { generateNewEquipmentItem } from '../Logic/Generator/Equipment';
import { timersActions } from './timers-slice';
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

export default shopSlice.reducer;
export const shopActions = shopSlice.actions;
