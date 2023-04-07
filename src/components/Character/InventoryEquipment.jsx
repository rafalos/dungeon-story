import React from 'react';
import Item from '../UI/Item';
import { ITEM_TYPES } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem } from '../../store/player-equipment-slice';
import classes from './InventoryEquipment.module.css';
import { itemSold } from '../../store/player-inventory-slice';

function InventoryEquipment({ inventoryItems, sellMode }) {
  const dispatch = useDispatch();
  const currentEquipment = useSelector((state) => state.equipment);

  const itemSoldHandler = (item) => {
    dispatch(itemSold(item));
  };

  const itemEquippedHandler = (item) => {
    if (currentEquipment[item.equipmentSlot]) return;
    console.log(item.equipmentSlot);

    dispatch(equipItem(item));
  };

  const equipment = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.EQUIPMENT
  );

  return (
    <div>
      <h2>Equipment</h2>
      <div className={classes['tab']}>
        {equipment.map((item) => (
          <Item
            key={item.id}
            item={item}
            equipable={true}
            onItemClicked={
              sellMode
                ? () => itemSoldHandler(item)
                : () => itemEquippedHandler(item)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryEquipment;
