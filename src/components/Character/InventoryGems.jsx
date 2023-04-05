import React from 'react';
import { ITEM_TYPES } from '../../utils/contants';
import Item from '../UI/Item';
import { playerInventoryActions } from '../../store/player-inventory-slice';
import classes from './InventoryEquipment.module.css';
import { useDispatch } from 'react-redux';
import { itemSold } from '../../store/player-inventory-slice';

function InventoryGems({ inventoryItems, sellMode }) {
  const dispatch = useDispatch();
  const gems = inventoryItems.filter((item) => item.type === ITEM_TYPES.GEM);

  const itemSoldHandler = (item) => {
    dispatch(itemSold(item));
  };

  const itemClickHandler = (item) => {
  };

  return (
    <div>
      <h2>Gems</h2>
      <div className={classes['tab']}>
      {gems.map((item) => (
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

export default InventoryGems;
