import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import Item from '../UI/Item';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  return (
    <Card>
      {inventory.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Inventory;
