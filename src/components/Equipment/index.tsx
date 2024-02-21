import { useDispatch } from 'react-redux';
import Container from '../UI/Container';
import { GiShardSword } from 'react-icons/gi';
import { useAppSelector } from '@/store';
import type { Equipment as EquipmentType } from '@/types';
import { unwearItem } from '@/services/inventory';
import { unequippedItem } from '@/store/player-inventory-slice';
import Worn from './Worn';
import Statistics from './Statistics';
import { useUserStatistics } from '@/store/user-slice';

function Equipment() {
  const wornItems = useAppSelector((state) => state.inventory.worn);
  const stats = useUserStatistics();
  const dispatch = useDispatch();

  const itemClickHandler = async (item: EquipmentType) => {
    try {
      await unwearItem(item.id);

      dispatch(unequippedItem(item));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container title="Equipment" icon={GiShardSword}>
      <div className="flex">
        <Worn wornItems={wornItems} onItemClicked={itemClickHandler} />
        <Statistics {...stats} />
      </div>
    </Container>
  );
}

export default Equipment;
