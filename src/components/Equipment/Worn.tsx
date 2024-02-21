import { Equipment } from '@/types';
import Item from '../UI/Item';
import classes from './Equipment.module.css';

type Props = {
  wornItems: Equipment[];
  onItemClicked: (item: Equipment) => void;
};

const Worn = ({ wornItems, onItemClicked }: Props) => {
  return (
    <div className={classes['equipment-container']}>
      {wornItems.map((element) => (
        <Item
          key={element.id}
          item={element}
          onItemClicked={onItemClicked}
        />
      ))}
    </div>
  );
};

export default Worn;
