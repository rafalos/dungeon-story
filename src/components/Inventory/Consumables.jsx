import React from 'react';
import { ITEM_TYPES } from '../../utils/contants';
import Item from '../UI/Item';
import { playerInventoryActions } from '../../store/player-inventory-slice';
import { useDispatch } from 'react-redux';

function Consumables({ inventoryItems }) {
  const dispatch = useDispatch();
  const potions = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.POTION
  );

  const itemClickHandler = (item) => {
    dispatch(
      playerInventoryActions.deductStackable({
        itemID: item.id,
      })
    );
  };

  return (
    <div>
      <h2>Potions</h2>
      {potions.map((item) => (
        <Item
          key={item.id}
          item={item}
          stackable={true}
          onItemClicked={itemClickHandler}
        />
      ))}
    </div>
  );
}

export default Consumables;
