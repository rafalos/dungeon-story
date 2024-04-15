import Button from '@/components/UI/Button';
import { MoveState } from '@/types';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

function Well({ onEventFinished, result }: Props) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-2xl">
        I feel refreshed and gained knowledge after I drunk from well
      </p>
      <ul>
        <li>I have gained {result.experienceGained} experience</li>
        <li>I have restored {result.healthDiff} health</li>
      </ul>
      <Button onClick={onEventFinished}>Continue exploration</Button>
    </div>
  );
}

export default Well;
