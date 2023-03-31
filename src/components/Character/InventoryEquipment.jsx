import React from 'react';
import Item from '../UI/Item';
import { ITEM_TYPES } from '../../utils/contants';
import { useDispatch } from 'react-redux';
import { equipItem } from '../../store/player-equipment-slice';

function Equipment({ inventoryItems }) {
  const dispatch = useDispatch();
  const handleEquip = (item) => {
    dispatch(equipItem(item));
  };

  const equipment = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.GEAR
  );

  return (
    <div>
      <h2>Equipment</h2>
      {equipment.map((item) => (
        <Item
          key={item.id}
          item={item}
          equipable={true}
          onItemClicked={handleEquip}
        />
      ))}
    </div>
  );
}

export default Equipment;
