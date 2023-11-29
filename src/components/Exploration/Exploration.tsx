import React, { useEffect, useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import { DEFAULT_STRINGS } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { explorationActions } from '../../store/exploration-slice';
import Button from '../UI/Button';
import {
  getCurrentChapter,
  getExploration,
  movePosition,
} from '@/services/exploration';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import SmallLoader from '../UI/SmallLoader';
import Card from '../UI/Card';
import Loader from '../UI/Loader';

function Exploration() {
  const queryClient = useQueryClient();

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
    isFetching,
    error: chapterError,
  } = useQuery({
    queryKey: ['currentStory', id],
    queryFn: () => getCurrentChapter(id),
    enabled: !!exploration,
  });

  const { mutate: move } = useMutation({
    mutationKey: ['movePosition', id],
    mutationFn: movePosition,
    onSuccess: () => {
      queryClient.refetchQueries({
        predicate: (query) =>
          query.queryKey[0] === 'exploration' ||
          query.queryKey[0] === 'currentStory',
      });
    },
  });

  const [started, setStarted] = useState(false);
  const [currentStory, setCurrentStory] = useState('');
  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);
  const dispatch = useDispatch();

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const explorationProgressHandler = () => {
    move(id);
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

  if (isLoading || chapterLoading || isFetching) return <Loader />;
  if (error) return 'An error has occurred: ' + error.message;
  if (!exploration || !chapter) return 'Something went wrong';

  console.log(exploration);
  console.log(chapter);

  return (
    <Card>
      <div>
        {exploration.currentStage !== 666 && (
          <>
            <h1>{exploration.currentStage}</h1>
            <h2>{exploration.name}</h2>
            <ExplorationTimeline
              seed={exploration.seed}
              currentPosition={exploration.currentStage}
            />
            <ExplorationEvent
              onEventProgress={explorationProgressHandler}
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
