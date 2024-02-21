import { createSlice } from '@reduxjs/toolkit';
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

export default playerEquipmentSlice.reducer;
export const playerEquipmentActions = playerEquipmentSlice.actions;
