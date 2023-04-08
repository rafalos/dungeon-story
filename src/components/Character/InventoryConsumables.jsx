import React from 'react';
import { ITEM_TYPES } from '../../utils/contants';
import Item from '../UI/Item';
import {
  playerInventoryActions,
  potionUsed,
} from '../../store/player-inventory-slice';
import { useDispatch } from 'react-redux';
import { itemSold } from '../../store/player-inventory-slice';
import classes from './InventoryEquipment.module.css';

function InventoryConsumables({ inventoryItems, sellMode }) {
  const dispatch = useDispatch();
  const potions = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.POTION
  );

  const itemSoldHandler = (item) => {
    dispatch(itemSold(item));
  };

  const itemClickHandler = (item) => {
    dispatch(potionUsed(item));
  };

  return (
    <div>
      <h2>Potions</h2>
      <div className={classes['tab']}>
        {potions.map((item) => (
          <Item
            key={item.id}
            item={item}
            stackable={true}
            onItemClicked={
              sellMode
                ? () => itemSoldHandler(item)
                : () => itemClickHandler(item)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryConsumables;
