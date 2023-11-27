import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import classes from './ExplorationPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  explorationActions,
  initializeExploration,
} from '../store/exploration-slice';
import Loader from '../components/UI/Loader';
import Button from '@/components/UI/Button';
import { useQuery } from '@tanstack/react-query';
import { getNewExploration } from '@/services/exploration';

function ExplorationPage() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: 'exploration',
    queryFn: getNewExploration,
    enabled: false,
  });

  const dispatch = useDispatch();
  const [gptDriven, setGptDriven] = useState(true);

  const changeStoryHandler = () => {
    setGptDriven((prevState) => !prevState);
  };

  const explorationFinishedHandler = () => {
    dispatch(explorationActions.reset());
  };

  const handleExplorationStart = () => {
    dispatch(initializeExploration());
  };

  return (
    <Card>
      {!data.seed && (
        <div className={classes['new-exploration']}>
          <label htmlFor='gpt-driven' class={classes.label}>
            <span>Enhance your story by Artificial Intelligence?</span>
            <p>
              (Recommended for better player experience. Could take
              significantly more time to load.)
            </p>
            <input
              type='checkbox'
              onChange={changeStoryHandler}
              id='gpt-driven'
              name='gpt-driven'
              checked={gptDriven}
            ></input>
          </label>
          <Button onClick={refetch}>Start new exploration</Button>
        </div>
      )}
      {data.seed && (
        <Exploration
          gptDriven={gptDriven}
          seed={seed}
          onExplorationFinished={explorationFinishedHandler}
        />
      )}
    </Card>
  );
}

export default ExplorationPage;
