import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import { DEFAULT_STRINGS } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { explorationActions } from '../../store/exploration-slice';
import Button from '../UI/Button';
import { getCurrentChapter, getExploration } from '@/services/exploration';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import SmallLoader from '../UI/SmallLoader';
import Card from '../UI/Card';

function Exploration() {
  const { id = '' } = useParams<{
    id: string;
  }>();

  const {
    data: exploration,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['exploration', id],
    queryFn: () => getExploration(id),
  });

  const {
    data: chapter,
    isLoading: chapterLoading,
    error: chapterError,
  } = useQuery({
    queryKey: ['currentStory', id],
    queryFn: () => getCurrentChapter(id),
    enabled: !!exploration,
  });

  const [started, setStarted] = useState(false);
  const [currentStory, setCurrentStory] = useState('');
  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);
  const dispatch = useDispatch();

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const playerDeadHandler = () => {
    dispatch(playerStatisticActions.restoreFullHealth());
  };

  const itemFoundHandler = (items) => {
    setItemsFound((prevState) => {
      const newItems = prevState.concat(items);
      return newItems;
    });
  };

  // useEffect(() => {
  //   if (currentPosition < 0) {
  //     setCurrentStory(story[0]);
  //   } else {
  //     setCurrentStory(story[currentPosition + 1]);
  //   }
  // }, [currentPosition]);

  const enterDungeonHandler = async () => {
    setStarted(true);
  };

  if (isLoading && chapterLoading) return <SmallLoader />;
  if (error) return 'An error has occurred: ' + error.message;
  if (!exploration || !chapter) return 'Something went wrong';

  console.log(exploration);
  console.log(chapter);

  return (
    <Card>
      <h1>{exploration.currentStage}</h1>
      <div>
        {exploration.currentStage !== 666 && (
          <>
            <h2>{exploration.name}</h2>
            <ExplorationTimeline
              seed={exploration.seed}
              currentPosition={exploration.currentStage}
            />
            <ExplorationEvent
              onPlayerDeath={playerDeadHandler}
              eventString={exploration.seed[exploration.currentStage]}
              currentPosition={exploration.currentStage}
              onItemFound={itemFoundHandler}
              onExperienceGained={experienceGainedHandler}
              currentStory={chapter.message}
            />
          </>
        )}

        {/* <ExplorationSummary
          ending={characterDead ? DEFAULT_STRINGS.DEAD : currentStory}
          onFinished={onExplorationFinished}
          totalExperienceGained={experienceGained}
          totalItemsFound={itemsFound}
        /> */}
      </div>
    </Card>
  );
}

export default Exploration;
