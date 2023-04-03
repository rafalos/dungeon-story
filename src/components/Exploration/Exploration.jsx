import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';

function Exploration({ seed, onExplorationFinished, explorationStory }) {
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [currentStory, setCurrentStory] = useState('');

  useEffect(() => {
    if (currentPosition < 0) {
      setCurrentStory(explorationStory[0]);
    } else {
      setCurrentStory(explorationStory[currentPosition + 1]);
    }
  }, [currentPosition]);

  const progressHandler = () => {
    setCurrentPosition((currentPosition) => (currentPosition += 1));
  };

  return (
    <div>
      {currentPosition !== seed.length ? (
        <div>
          {' '}
          <ExplorationTimeline seed={seed} currentPosition={currentPosition} />
          <ExplorationEvent
            eventId={seed[currentPosition]}
            onEventProgress={progressHandler}
            currentPosition={currentPosition}
            currentStory={currentStory}
          />
        </div>
      ) : (
        <ExplorationSummary
          story={currentStory}
          onFinished={onExplorationFinished}
        />
      )}
    </div>
  );
}

export default Exploration;
