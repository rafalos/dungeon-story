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
import Container from '../UI/Container';

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
    refetch: refetchStory,
  } = useQuery({
    queryKey: ['currentStory', id],
    queryFn: () => getCurrentChapter(id),
    enabled: !!exploration,
  });

  const { mutateAsync: move } = useMutation({
    mutationKey: ['movePosition', id],
    mutationFn: movePosition,
    onSettled: () => {
      queryClient.refetchQueries({
        predicate: (query) => query.queryKey[0] === 'exploration',
      });
    },
  });

  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState([]);
  const dispatch = useDispatch();

  const experienceGainedHandler = (amount) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const explorationProgressHandler = async () => {
    await move(id);
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

  return (
    <Container title={exploration.name}>
      {exploration.currentStage <= exploration.seed.length - 1 ? (
        <>
          <ExplorationTimeline
            name={exploration.name}
            seed={exploration.seed}
            currentPosition={exploration.currentStage}
          />
          <ExplorationEvent
            fetchNextStory={refetchStory}
            eventCount={exploration.seed.length}
            onEventProgress={explorationProgressHandler}
            onPlayerDeath={playerDeadHandler}
            eventString={exploration.seed[exploration.currentStage]}
            currentPosition={exploration.currentStage}
            onItemFound={itemFoundHandler}
            onExperienceGained={experienceGainedHandler}
            currentStory={chapter.message}
          />
        </>
      ) : (
        <ExplorationSummary
          ending={chapter.message}
          totalExperienceGained={experienceGained}
          totalItemsFound={itemsFound}
        />
      )}
    </Container>
  );
}

export default Exploration;
