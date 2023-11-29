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
      <div className={classes['new-exploration']}>
        <label htmlFor='gpt-driven' className={classes.label}>
          <span>Your story begins here</span>
        </label>
        <Button mode='primary' onClick={() => mutate()}>
          {status === 'pending' ? <SmallLoader /> : 'Generate new'}
        </Button>
        {isLoading ? <SmallLoader /> : <List explorations={explorations} />}
      </div>

      {/* {data && (
        <Exploration
          id={data.explorationID}
          location={data.location}
          gptDriven={gptDriven}
          seed={data.seed}
          currentPosition={data.position}
        />
      )} */}
    </Card>
  );
}

export default ExplorationPage;
