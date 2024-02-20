import { useAppSelector } from '@/store';
import Equipment from './Equipment';

function Inventory({ items, sellMode }) {
  const { equipment } = useAppSelector((state) => state.inventory);

  return (
    <div className="inventory-details">
      <Equipment inventoryItems={equipment} sellMode={sellMode} />
      {/* <InventoryConsumables inventoryItems={items} sellMode={sellMode} /> */}
      {/* <InventoryGems inventoryItems={items} sellMode={sellMode} /> */}
    </div>
  );
}

export default Inventory;
