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
import { useNotification } from '@/providers/NotificationProvider';

function ExplorationPage() {
  const { setNotification } = useNotification();
  const queryClient = useQueryClient();

  const { mutate, status, error } = useMutation({
    mutationFn: generateNewExploration,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['explorations'],
      });
    },
    onError: (error) => {
      console.log(error);
      setNotification(error.response.data);
    },
  });

  const { data: explorations, isLoading } = useQuery({
    queryKey: ['explorations'],
    queryFn: getExplorations,
  });

  return (
    <>
      {isLoading ? (
        <SmallLoader />
      ) : (
        <Container title="Current explorations" icon={GiDungeonGate}>
          <Button onClick={() => mutate()}>
            {status === 'pending' ? <SmallLoader /> : 'New exploration'}
          </Button>

          {explorations && <List explorations={explorations} />}
        </Container>
      )}
    </>
  );
}

export default ExplorationPage;
