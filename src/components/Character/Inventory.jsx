import React from 'react';
import { useSelector } from 'react-redux';
import InventoryEquipment from './InventoryEquipment';
import InventoryConsumables from './InventoryConsumables';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  return (
    <div className='inventory-details'>
      <InventoryEquipment inventoryItems={inventory.items} />
      <InventoryConsumables inventoryItems={inventory.items} />
    </div>
  );
}

export default Inventory;
