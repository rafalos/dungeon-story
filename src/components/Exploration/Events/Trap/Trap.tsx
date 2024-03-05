import Button from '@/components/UI/Button';
import { MoveState } from '@/types';

type Props = {
  onEventFinished: () => void;
  result: MoveState;
};

function Trap({ onEventFinished, result }: Props) {
  return (
    <>
      You have fallen into a trap. and you have lost {result.healthDiff} Health!
      <Button onClick={onEventFinished}>Done</Button>
    </>
  );
}

export default Trap;
