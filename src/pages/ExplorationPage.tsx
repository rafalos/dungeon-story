import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import classes from './ExplorationPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { explorationActions } from '../store/exploration-slice';
import Loader from '../components/UI/Loader';
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

  const [gptDriven, setGptDriven] = useState(true);

  const changeStoryHandler = () => {
    setGptDriven((prevState) => !prevState);
  };

  const startExplorationHandler = () => {
    setQueryEnabled(true);
  };

  return (
    <Card>
      <div className={classes['new-exploration']}>
        <label htmlFor='gpt-driven' class={classes.label}>
          <span>Enhance your story by Artificial Intelligence?</span>
          <p>
            (Recommended for better player experience. Could take significantly
            more time to load.)
          </p>
          <input
            type='checkbox'
            onChange={changeStoryHandler}
            id='gpt-driven'
            name='gpt-driven'
            checked={gptDriven}
          ></input>
        </label>
        <Button onClick={() => mutate()}>
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
