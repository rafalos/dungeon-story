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
  let metadata = [];
  for (const metadataEntry in item.metadata) {
    metadata.push([metadataEntry, item.metadata[metadataEntry]]);
  }

  return (dispatch) => {
    dispatch(
      playerEquipmentActions.wearItem({
        item,
      })
    );

    dispatch(
      playerStatisticActions.changeStatistic({
        statistics: metadata,
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
  let metadata = [];
  for (const metadataEntry in item.metadata) {
    metadata.push([metadataEntry, item.metadata[metadataEntry]]);
  }

  const negativeMetadata = metadata.map((metadataEntry) => [
    metadataEntry[0],
    -Math.abs(metadataEntry[1]),
  ]);

  return (dispatch) => {
    dispatch(
      playerEquipmentActions.unwearItem({
        equipmentSlot: item.equipmentSlot,
      })
    );

    dispatch(
      playerStatisticActions.changeStatistic({
        statistics: negativeMetadata,
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
