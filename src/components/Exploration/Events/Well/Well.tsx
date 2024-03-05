import Button from '@/components/UI/Button';
import { MoveState } from '@/types';

type Props = {
  onEventFinished: () => void;
  onExperienceGained: (amount: number) => void;
  result: MoveState;
};

function Well({ onEventFinished, result }: Props) {
  return (
    <div>
      <div className="flex-column-container">
        You feel refreshed and gained knowledge after you drunk from well
        <ul>
          <li>You have gained {result.experienceGained} experience</li>
          <li>You have restored {result.healthDiff} health</li>
        </ul>
        <Button onClick={onEventFinished}>Continue exploration</Button>
      </div>
    </div>
  );
}

export default Well;
