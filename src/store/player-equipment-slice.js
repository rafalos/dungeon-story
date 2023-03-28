import { createSlice } from '@reduxjs/toolkit';
import { playerStatisticActions } from './player-statistics-slice';
import { playerInventoryActions } from './player-inventory-slice';
import { EQUIPMENT } from '../utils/contants';

const initialEquipment = {
  [EQUIPMENT.SLOTS.HEAD]: null,
  [EQUIPMENT.SLOTS.TORSO]: null,
  [EQUIPMENT.SLOTS.LEGS]: null,
  [EQUIPMENT.SLOTS.BOOTS]: null,
  [EQUIPMENT.SLOTS.RING1]: null,
  [EQUIPMENT.SLOTS.LEFT_HAND]: null,
  [EQUIPMENT.SLOTS.RIGHT_HAND]: null,
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

export const unequipItem = (item) => {
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
  };
};

export default playerEquipmentSlice.reducer;
export const playerEquipmentActions = playerEquipmentSlice.actions;
