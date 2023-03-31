import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';

function Exploration({ seed, onExplorationFinished }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    if (currentPosition == seed.length) {
      onExplorationFinished();
    }
  }, [currentPosition]);

  const progressHandler = () => {
    setCurrentPosition((currentPosition) => (currentPosition += 1));
  };

  return (
    <div>
      <ExplorationTimeline seed={seed} currentPosition={currentPosition} />
      <ExplorationEvent
        eventId={seed[currentPosition]}
        onEventProgress={progressHandler}
      />
    </div>
  );
}

export default Exploration;
