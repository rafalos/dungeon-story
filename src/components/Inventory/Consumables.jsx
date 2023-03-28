import React from 'react';
import { ITEM_TYPES } from '../../utils/contants';
import StackableItem from '../UI/StackableItem';

function Consumables({ inventoryItems }) {
  const potions = inventoryItems.filter(
    (item) => item.type === ITEM_TYPES.POTION
  );

  return (
    <div>
      <h2>Potions</h2>
      {potions.map((item) => (
        <StackableItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Consumables;
