import Button from '@/components/UI/Button';
import { MoveState } from '@/types';
import Item from '@/components/UI/Item';

type Props = {
  onEventFinished: () => void;
  result: MoveState;
};

function Treasure({ onEventFinished, result }: Props) {
  return (
    <div>
      <div className="flex-column-container">
        You have found items:
        <div>
          {result.itemsFound.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <Button onClick={onEventFinished}>Continue exploration</Button>
      </div>
    </div>
  );
}

export default Treasure;
