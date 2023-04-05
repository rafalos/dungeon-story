import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import { useGptStory } from '../../hooks/useGptStory';
import ResourceBar from '../UI/ResourceBar';

function Exploration({ seed, onExplorationFinished, gptDriven }) {
  const [isLoading, story, loadingProgress] = useGptStory(seed, gptDriven);
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [currentStory, setCurrentStory] = useState('');
  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const itemFoundHandler = (items) => {
    setItemsFound((prevState) => {
      const newItems = prevState.concat(items);
      return newItems;
    });
  };

  useEffect(() => {
    if (currentPosition < 0) {
      setCurrentStory(story[0]);
    } else {
      setCurrentStory(story[currentPosition + 1]);
    }
  }, [currentPosition, story]);

  const progressHandler = () => {
    setCurrentPosition((currentPosition) => (currentPosition += 1));
  };

  return (
    <div>
      {isLoading ? (
        <div className='flex-column-container'>
          The story is being generated. Stay tuned!
          <ResourceBar percentage={loadingProgress}/>
        </div>
      ) : (
        <>
          {currentPosition !== seed.length && seed ? (
            <>
              <ExplorationTimeline
                seed={seed}
                currentPosition={currentPosition}
              />
              <ExplorationEvent
                eventString={seed[currentPosition]}
                onEventProgress={progressHandler}
                currentPosition={currentPosition}
                currentStory={currentStory}
                onItemFound={itemFoundHandler}
                onExperienceGained={experienceGainedHandler}
              />
            </>
          ) : (
            <ExplorationSummary
              ending={currentStory}
              onFinished={onExplorationFinished}
              totalExperienceGained={experienceGained}
              totalItemsFound={itemsFound}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Exploration;
