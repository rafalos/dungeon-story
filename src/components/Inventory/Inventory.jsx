import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import EquipmentItem from '../UI/EquipmentItem';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  return (
    <Card>
      {inventory.items.map((item) => (
        <EquipmentItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Inventory;
