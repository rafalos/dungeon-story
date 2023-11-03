import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import classes from './ExplorationPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { explorationActions } from '../store/exploration-slice';

function ExplorationPage() {
  const { seed, currentPosition } = useSelector((state) => state.exploration);
  const dispatch = useDispatch();
  const [gptDriven, setGptDriven] = useState(true);

  const changeStoryHandler = () => {
    setGptDriven((prevState) => !prevState);
  };

  const explorationFinishedHandler = () => {
    dispatch(explorationActions.reset());
  };

  const handleExplorationStart = () => {
    dispatch(explorationActions.initialize());
  };

  return (
    <Card>
      {!seed && (
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
          <button className={classes.btn} onClick={handleExplorationStart}>
            Start new exploration
          </button>
        </div>
      )}
      {seed && (
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
