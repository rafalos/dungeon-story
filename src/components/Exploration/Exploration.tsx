import { useState } from 'react';
import ExplorationTimeline from './ExplorationTimeline';
import ExplorationEvent from './ExplorationEvent';
import ExplorationSummary from './ExplorationSummary';
import {
  getCurrentChapter,
  getExploration,
  movePosition,
} from '@/services/exploration';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Container from '../UI/Container';
import SmallLoader from '../UI/SmallLoader';
import { Equipment, MoveState } from '@/types';

function Exploration() {
  const queryClient = useQueryClient();
  const [result, setResult] = useState<MoveState | null>(null);

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
    refetch: refetchStory,
  } = useQuery({
    queryKey: ['currentStory', id],
    queryFn: () => getCurrentChapter(id),
    enabled: !!exploration,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: move } = useMutation({
    mutationKey: ['movePosition', id],
    mutationFn: movePosition,
    onSuccess: (response) => {
      setResult(response);
    },
    onSettled: () => {
      queryClient.refetchQueries({
        predicate: (query) => query.queryKey[0] === 'exploration',
      });
    },
  });

  const [experienceGained, setExperienceGained] = useState(0);
  const [itemsFound, setItemsFound] = useState<Equipment[]>([]);

  const experienceGainedHandler = (amount: number) => {
    setExperienceGained((prevState) => (prevState += amount));
  };

  const explorationProgressHandler = async () => {
    await move(id);
  };

  const itemFoundHandler = (items: Equipment[]) => {
    setItemsFound((prevState) => {
      const newItems = prevState.concat(items);
      return newItems;
    });
  };

  if (isLoading || chapterLoading || isFetching) return <SmallLoader />;
  if (error) return 'An error has occurred: ' + error.message;
  if (!exploration || !chapter) return 'Something went wrong';

  return (
    <Container title={exploration.name}>
      {exploration.currentStage <= exploration.seed.length - 1 ? (
        <>
          <ExplorationTimeline
            image={exploration.image}
            name={exploration.name}
            seed={exploration.seed}
            currentPosition={exploration.currentStage}
            currentHealth={exploration.currentHealth}
            maxHealth={exploration.maxHealth}
          />
          <ExplorationEvent
            result={result}
            fetchNextStory={refetchStory}
            eventCount={exploration.seed.length}
            onEventProgress={explorationProgressHandler}
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
