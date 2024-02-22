import { useAppSelector } from '@/store';
import Equipment from './Equipment';

type Props = {
  sellMode?: boolean;
};

function Inventory({ sellMode }: Props) {
  const { equipment } = useAppSelector((state) => state.inventory);

  return (
    <div className="flex flex-col items-center text-customWhite">
      <h2>Inventory</h2>
      <Equipment equipment={equipment} sellMode={sellMode} />
      {/* <InventoryConsumables inventoryItems={items} sellMode={sellMode} /> */}
      {/* <InventoryGems inventoryItems={items} sellMode={sellMode} /> */}
    </div>
  );
}

export default Inventory;
