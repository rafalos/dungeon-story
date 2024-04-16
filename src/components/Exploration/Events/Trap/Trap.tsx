import Button from '@/components/UI/Button';
import { MoveState } from '@/types';

type Props = {
  onEventFinished: () => void;
  result: MoveState;
};

function Trap({ onEventFinished, result }: Props) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="md:text-2xl">
        I have fallen into a trap. and you have lost {result.healthDiff} Health!
      </p>
      <Button onClick={onEventFinished}>Continue</Button>
    </div>
  );
}

export default Trap;
