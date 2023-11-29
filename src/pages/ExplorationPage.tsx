import Card from '../components/UI/Card';
import classes from './ExplorationPage.module.css';
import Button from '@/components/UI/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  generateNewExploration,
  getExplorations,
} from '@/services/exploration';
import List from '@/components/Exploration/List';
import SmallLoader from '@/components/UI/SmallLoader';
import Container from '@/components/UI/Container';
import { GiDungeonGate } from 'react-icons/gi';

function ExplorationPage() {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: generateNewExploration,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['explorations'],
      });
    },
  });

  const { data: explorations, isLoading } = useQuery({
    queryKey: ['explorations'],
    queryFn: getExplorations,
  });

  return (
    <Card>
      {isLoading ? (
        <SmallLoader />
      ) : (
        <Container
          title='Current explorations'
          variant='green'
          icon={GiDungeonGate}
        >
          <>
            <Button onClick={() => mutate()}>
              {status === 'pending' ? <SmallLoader /> : 'Search for a new exploration'}
            </Button>
          </>
          <List explorations={explorations} />
        </Container>
      )}
    </Card>
  );
}

export default ExplorationPage;
