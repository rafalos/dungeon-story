import { createSlice } from '@reduxjs/toolkit';
import { playerStatisticActions } from './player-statistics-slice';
import { playerInventoryActions } from './player-inventory-slice';

const initialEquipment = {
  helmet: null,
  torso: null,
  legs: null,
  boots: null,
  ring1: null,
  leftHand: null,
  rightHand: null,
};

const playerEquipmentSlice = createSlice({
  name: 'player-equipment',
  initialState: initialEquipment,
  reducers: {
    wearItem(state, action) {
      state[action.payload.item.equipmentSlot] = { ...action.payload.item };
    },
    unwearItem(state, action) {
      state[action.payload.equipmentSlot] = null;
    },
  },
});

export const equipItem = (item) => {
  return (dispatch) => {
    dispatch(
      playerEquipmentActions.wearItem({
        item,
      })
    );

    dispatch(
      playerStatisticActions.increaseStat({
        statistics: item.metadata,
      })
    );

    dispatch(
      playerInventoryActions.removeItem({
        id: item.id,
      })
    );
  };
};

export const unequipItem = item => {
  return (dispatch) => {
    dispatch(
      playerEquipmentActions.unwearItem({
        equipmentSlot: item.equipmentSlot,
      })
    );

    dispatch(
      playerInventoryActions.addSingleItem({
        item,
      })
    );
  }
}

export default playerEquipmentSlice.reducer;
export const playerEquipmentActions = playerEquipmentSlice.actions;
