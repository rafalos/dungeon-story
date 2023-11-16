import React from 'react';
import InventoryEquipment from './InventoryEquipment';
import InventoryConsumables from './InventoryConsumables';
import InventoryGems from './InventoryGems';

function Inventory({ items, sellMode }) {
  return (
    <div className='inventory-details'>
      <InventoryEquipment inventoryItems={items} sellMode={sellMode} />
      {/* <InventoryConsumables inventoryItems={items} sellMode={sellMode} /> */}
      {/* <InventoryGems inventoryItems={items} sellMode={sellMode} /> */}
    </div>
  );
}

export default Inventory;
