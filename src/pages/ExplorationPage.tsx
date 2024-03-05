import Button from '@/components/UI/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  generateNewExploration,
  getExplorations,
} from '@/services/exploration';
import List from '@/components/Exploration/List';
import SmallLoader from '@/components/UI/SmallLoader';
import Container from '@/components/UI/Container';
import { useNotify } from '@/providers/NotificationProvider';
import { useAppDispatch } from '@/store';
import { deductEnergy } from '@/store/user-slice';

function ExplorationPage() {
  const notify = useNotify();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate, status } = useMutation({
    mutationFn: generateNewExploration,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['explorations'],
      });

      dispatch(deductEnergy());
    },
    onError: (error) => {
      notify(error.response.data);
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
        <Container title="Current explorations">
          <div className="flex flex-col items-center">
            <Button onClick={() => mutate()}>
              {status === 'pending' ? <SmallLoader /> : 'New exploration'}
            </Button>

            {explorations && <List explorations={explorations} />}
          </div>
        </Container>
      )}
    </>
  );
}

export default ExplorationPage;
