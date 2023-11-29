import React from 'react';
import Item from '../UI/Item';
import { ITEM_TYPES } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem } from '../../store/player-equipment-slice';
import classes from './InventoryEquipment.module.css';
import { itemSold } from '../../store/player-inventory-slice';
import Container from '../UI/Container';
import { GiBackpack } from "react-icons/gi";

function InventoryEquipment({ inventoryItems, sellMode }) {
  const dispatch = useDispatch();
  const currentEquipment = useSelector((state) => state.equipment);

  const itemSoldHandler = (item) => {
    dispatch(itemSold(item));
  };

  const itemEquippedHandler = (item) => {
    if (currentEquipment[item.equipmentSlot]) return;

    dispatch(equipItem(item));
  };

  const equipment = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.EQUIPMENT
  );

  return (
    <Container title='Inventory' variant='red' icon={GiBackpack}>
      {equipment.map((item) => (
        <Item
          key={item._id}
          item={item}
          equipable={true}
          onItemClicked={
            sellMode
              ? () => itemSoldHandler(item)
              : () => itemEquippedHandler(item)
          }
        />
      ))}
    </Container>
  );
}

export default InventoryEquipment;
