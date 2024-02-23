import React from 'react';
import TimelineItem from './TimelineItem';
import classes from './ExplorationTimeline.module.css';

type Props = {
  currentPosition: number;
  seed: Seed;
  name: string;
};

function ExplorationTimeline({ currentPosition, seed, name }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-md bg-customBlack p-4">
      <h1 className="text-2xl">{name}</h1>

      <div className="flex gap-4">
        {seed.map((eventId, index) => {
          if (index === currentPosition) {
            return <TimelineItem key={eventId} isActive event={eventId} />;
          } else {
            return <TimelineItem event={eventId} key={eventId} />;
          }
        })}
      </div>
    </div>
  );
}

export default ExplorationTimeline;
