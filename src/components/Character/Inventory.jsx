import React from 'react';
import { useSelector } from 'react-redux';
import InventoryEquipment from './InventoryEquipment';
import InventoryConsumables from './InventoryConsumables';
import InventoryGems from './InventoryGems';

function Inventory({ sellMode }) {
  const inventory = useSelector((state) => state.inventory);

  return (
    <div className='inventory-details'>
      <InventoryEquipment
        inventoryItems={inventory.items}
        sellMode={sellMode}
      />
      <InventoryConsumables
        inventoryItems={inventory.items}
        sellMode={sellMode}
      />
      <InventoryGems inventoryItems={inventory.items} sellMode={sellMode} />
    </div>
  );
}

export default Inventory;
