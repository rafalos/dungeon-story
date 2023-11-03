import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import { useGptStory } from '../../hooks/useGptStory';
import { DEFAULT_STRINGS } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { explorationActions } from '../../store/exploration-slice';

function Exploration({ seed, onExplorationFinished, gptDriven }) {
  const { currentPosition } = useSelector((state) => state.exploration);
  const [characterDead, setCharacterDead] = useState(false);
  const { isLoading: chapterLoading, story, currentChapter } = useGptStory(seed, gptDriven);
  const [currentStory, setCurrentStory] = useState('');
  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);
  const dispatch = useDispatch();

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const playerDeadHandler = () => {
    setCharacterDead(true);
    dispatch(playerStatisticActions.restoreFullHealth());
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

    console.log(currentPosition);
  }, [currentPosition]);

  const progressHandler = () => {
    dispatch(explorationActions.movePosition());
  };

  return (
    <>
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
              currentStory={currentChapter}
              chapterLoading={chapterLoading}
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
    </>
  );
}

export default Exploration;
