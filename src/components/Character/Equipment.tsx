import Item from '../UI/Item';
import { equippedItem, itemSold } from '../../store/player-inventory-slice';
import Container from '../UI/Container';
import { GiBackpack } from 'react-icons/gi';
import { sellItem } from '@/services/shop';
import { Equipment } from '@/types';
import { useAppDispatch } from '@/store';
import { wearItem } from '@/services/inventory';
import { useNotify } from '@/providers/NotificationProvider';
import { AxiosError } from 'axios';

type Props = {
  equipment: Equipment[];
  sellMode: boolean;
};

function InventoryEquipment({ equipment, sellMode }: Props) {
  const dispatch = useAppDispatch();
  const notify = useNotify();

  const itemSoldHandler = async (item: Equipment) => {
    try {
      await sellItem(item.id);
      dispatch(itemSold(item));
    } catch (error) {
      if (error instanceof AxiosError) {
        notify(error.response?.data.message, 'error');
      }
    }
  };

  const itemEquippedHandler = async (item: Equipment) => {
    try {
      await wearItem(item.id);
      dispatch(equippedItem(item));
    } catch (error) {
      if (error instanceof AxiosError) {
        notify(error.response?.data.message, 'error');
      }
    }
  };

  return (
    <div className='flex flex-wrap'>
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
    </div>
  );
}

export default InventoryEquipment;
