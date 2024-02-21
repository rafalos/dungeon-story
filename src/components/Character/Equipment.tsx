import Item from '../UI/Item';
import { useDispatch } from 'react-redux';
import { equipItem } from '../../store/player-equipment-slice';
import { itemSold } from '../../store/player-inventory-slice';
import Container from '../UI/Container';
import { GiBackpack } from 'react-icons/gi';
import { sellItem } from '@/services/shop';
import { Equipment } from '@/types';
import { useAppDispatch } from '@/store';

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

  const itemEquippedHandler = (item) => {
    if (currentEquipment[item.equipmentSlot]) return;

    dispatch(equipItem(item));
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
