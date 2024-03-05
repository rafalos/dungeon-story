import ResourceBar from '../UI/ResourceBar';
import TimelineItem from './TimelineItem';

type Props = {
  currentPosition: number;
  seed: Seed;
  name: string;
  currentHealth: number;
  maxHealth: number;
  image: string;
};

function ExplorationTimeline({
  name,
  image,
  currentPosition,
  seed,
  currentHealth,
  maxHealth,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-customBlack">
      <img src={image} alt={`${name} exploration`} />
      <div className="flex flex-wrap p-4">
        {seed.map((eventId, index) => (
          <TimelineItem
            itemKnown={currentPosition >= index}
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
