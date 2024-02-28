import { Equipment } from '@/types';
import Item from '../UI/Item';
import classes from './Equipment.module.css';
import { useAppDispatch } from '@/store';
import { unwearItem } from '@/services/inventory';
import { unequippedItem } from '@/store/player-inventory-slice';

type Props = {
  wornItems: Equipment[];
};

const Worn = ({ wornItems }: Props) => {
  const dispatch = useAppDispatch();
  const handleUnwear = async (item: Equipment) => {
    try {
      await unwearItem(item.id);

      dispatch(unequippedItem(item));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes['equipment-container']}>
      {wornItems.map((element) => (
        <Item key={element.id} item={element} onItemClicked={handleUnwear} />
      ))}
    </div>
  );
};

export default Worn;
