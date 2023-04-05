import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import { useGptStory } from '../../hooks/useGptStory';
import ResourceBar from '../UI/ResourceBar';
import { DEFAULT_STRINGS } from '../../utils/contants';
import { useDispatch } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';

function Exploration({ seed, onExplorationFinished, gptDriven }) {
  const [characterDead, setCharacterDead] = useState(false);
  const [isLoading, story, loadingProgress] = useGptStory(seed, gptDriven);
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [currentStory, setCurrentStory] = useState('');
  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);
  const dispatch = useDispatch();

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const playerDeadHandler = () => {
    setCharacterDead(true);
    dispatch(playerStatisticActions.restorePlayer());
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
    <>
      {isLoading ? (
        <div className='flex-column-container'>
          The story is being generated. Stay tuned!
          <ResourceBar percentage={loadingProgress} />
        </div>
      ) : (
        <div>
          {currentPosition !== seed.length && seed && !characterDead ? (
            <>
              <ExplorationTimeline
                seed={seed}
                currentPosition={currentPosition}
              />
              <ExplorationEvent
                onPlayerDeath={playerDeadHandler}
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
              ending={characterDead ? DEFAULT_STRINGS.DEAD : currentStory}
              onFinished={onExplorationFinished}
              totalExperienceGained={experienceGained}
              totalItemsFound={itemsFound}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Exploration;
