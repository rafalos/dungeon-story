import React from 'react';
import EquipmentItem from '../UI/EquipmentItem';
import { ITEM_TYPES } from '../../utils/contants';

function Equipment({ inventoryItems }) {
  const equipment = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.GEAR
  );
  return (
    <div>
      <h2>Equipment</h2>
      {equipment.map((item) => (
        <EquipmentItem key={item.id} item={item} equipable={true} />
      ))}
    </div>
  );
}

export default Equipment;
