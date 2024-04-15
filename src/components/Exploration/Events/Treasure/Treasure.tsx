import Button from '@/components/UI/Button';
import { MoveState } from '@/types';
import Item from '@/components/UI/Item';

type Props = {
  onEventFinished: () => void;
  result: MoveState;
};

function Treasure({ onEventFinished, result }: Props) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-2xl">I have found items:</p>
      <div>
        {result.itemsFound.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={onEventFinished}>Continue exploration</Button>
    </div>
  );
}

export default Treasure;
