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
    <div className="flex flex-col items-center justify-center rounded-md bg-customBlack">
      <div className="flex flex-wrap p-4">
        {seed.map((eventId, index) => (
          <TimelineItem
            key={index}
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
