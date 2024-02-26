import { useAppSelector } from '@/store';
import ResourceBar from '../UI/ResourceBar';
import TimelineItem from './TimelineItem';

type Props = {
  currentPosition: number;
  seed: Seed;
  name: string;
  currentHealth: number;
  maxHealth: number;
};

function ExplorationTimeline({
  currentPosition,
  seed,
  currentHealth,
  maxHealth,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-md bg-customBlack py-4">
      <div className="flex">
        {seed.map((eventId, index) => (
          <TimelineItem
            key={eventId}
            isActive={index === currentPosition}
            event={eventId}
          />
        ))}
      </div>
      <div className="w-[50%]">
        <ResourceBar
          currentResource={currentHealth}
          maxResource={maxHealth}
          bgColor="bg-customRed"
        />
      </div>
    </div>
  );
}

export default ExplorationTimeline;
