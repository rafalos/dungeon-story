import React, { useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';

function Exploration({ seed }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const progressHandler = () => {
    setCurrentPosition((currentPosition) => currentPosition += 1);
  };

  return (
    <div>
      <ExplorationTimeline
        seed={seed}
        currentPosition={currentPosition}
      />
      <ExplorationEvent
        eventId={seed[currentPosition]}
        onEventProgress={progressHandler}
      />
    </div>
  );
}

export default Exploration;
