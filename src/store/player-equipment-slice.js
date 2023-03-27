import { createSlice } from '@reduxjs/toolkit';

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
    equipItem(state, action) {},
    unequipItem(state, action) {},
  },
});

export default playerEquipmentSlice.reducer;
export const playerEquipmentActions = playerEquipmentSlice.actions;
