import InventoryEquipment from './InventoryEquipment';

function Inventory({ items, sellMode }) {
  return (
    <div className="inventory-details">
      <InventoryEquipment inventoryItems={items} sellMode={sellMode} />
      {/* <InventoryConsumables inventoryItems={items} sellMode={sellMode} /> */}
      {/* <InventoryGems inventoryItems={items} sellMode={sellMode} /> */}
    </div>
  );
}

export default Inventory;
