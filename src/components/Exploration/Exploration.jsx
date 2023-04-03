import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';

function Exploration({ seed, onExplorationFinished, explorationStory }) {
  console.log(explorationStory)
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [currentStory, setCurrentStory] = useState('');

  useEffect(() => {
    if (currentPosition < 0) {
      setCurrentStory(explorationStory[0]);
    } else {
      setCurrentStory(explorationStory[currentPosition + 1]);
    }
  }, [currentPosition]);

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
        currentPosition={currentPosition}
        currentStory={currentStory}
      />
    </div>
  );
}

export default Exploration;
