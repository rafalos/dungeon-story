import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import InventoryEquipment from './InventoryEquipment';
import InventoryConsumables from './InventoryConsumables';
import Equipment from '../Equipment/Equipment';
import Statistics from '../Statistics/Statistics';

function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  return (
    <Card style={{ display: 'flex', gap: '10px' }}>
      <div className='character-details'>
        <Equipment />
        <Statistics />
      </div>
      <div className='inventory-details'>
        <InventoryEquipment inventoryItems={inventory.items} />
        <InventoryConsumables inventoryItems={inventory.items} />
      </div>
    </Card>
  );
}

export default Inventory;
