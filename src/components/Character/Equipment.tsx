import Item from '../UI/Item';
import { equippedItem, itemSold } from '../../store/player-inventory-slice';
import Container from '../UI/Container';
import { GiBackpack } from 'react-icons/gi';
import { sellItem } from '@/services/shop';
import { Equipment } from '@/types';
import { useAppDispatch } from '@/store';
import { wearItem } from '@/services/inventory';

type Props = {
  equipment: Equipment[];
  sellMode: boolean;
};

function InventoryEquipment({ equipment, sellMode }: Props) {
  const dispatch = useAppDispatch();

  const itemSoldHandler = async (item: Equipment) => {
    try {
      await sellItem(item.id);
      dispatch(itemSold(item));
    } catch (error) {
      console.log(error);
    }
  };

  const itemEquippedHandler = async (item: Equipment) => {
    try {
      await wearItem(item.id);
      dispatch(equippedItem(item));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container title="Inventory" icon={GiBackpack}>
      {equipment.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemClicked={
            sellMode
              ? () => itemSoldHandler(item)
              : () => itemEquippedHandler(item)
          }
        />
      ))}
    </Container>
  );
}

export default InventoryEquipment;
