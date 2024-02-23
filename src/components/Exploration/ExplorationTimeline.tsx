import TimelineItem from './TimelineItem';

type Props = {
  currentPosition: number;
  seed: Seed;
  name: string;
};

function ExplorationTimeline({ currentPosition, seed, name }: Props) {
  return (
    <div className="flex justify-center text-customWhite">
      {seed.map((eventId, index) => (
        <TimelineItem
          key={eventId}
          isActive={index === currentPosition}
          event={eventId}
        />
      ))}
    </div>
  );
}

export default ExplorationTimeline;
