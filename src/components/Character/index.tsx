import { useAppSelector } from '@/store';
import Equipment from './Equipment';
import Card from '../UI/Card';

type Props = {
  sellMode?: boolean;
};

function Inventory({ sellMode }: Props) {
  const { equipment } = useAppSelector((state) => state.inventory);

  return (
    <Card title="Inventory">
      <Equipment equipment={equipment} sellMode={sellMode} />
      {/* <InventoryConsumables inventoryItems={items} sellMode={sellMode} /> */}
      {/* <InventoryGems inventoryItems={items} sellMode={sellMode} /> */}
    </Card>
  );
}

export default Inventory;
