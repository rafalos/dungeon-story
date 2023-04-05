import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';
import classes from './ExplorationPage.module.css'

function ExplorationPage() {
  const [gptDriven, setGptDriven] = useState(true)
  const [explorationSeed, setExplorationSeed] = useState(null);

  const handleExplorationStart = () => {
    const newSeed = generateSeed();
    setExplorationSeed(newSeed);
  };

  const changeStoryHandler = () => {
    setGptDriven((prevState) => !prevState)
  }

  const explorationFinishedHandler = () => {
    setExplorationSeed(null);
  };

  return (
    <Card>
      {!explorationSeed && (
        <div className={classes['new-exploration']}>
          {' '}
          <label htmlFor='gpt-driven' class={classes.label}>
            <span>Enhance your story by Artificial Intelligence?</span>
            <p>(Recommended for better player experience. Could take significantly more time to load.)</p>
            <input type='checkbox' onChange={changeStoryHandler} id='gpt-driven' name='gpt-driven' checked={gptDriven}></input>
          </label>
          
          <button className={classes.btn} onClick={handleExplorationStart}>
            Start new exploration
          </button>
        </div>
      )}
      {explorationSeed && (
        <Exploration
          gptDriven={gptDriven}
          seed={explorationSeed}
          onExplorationFinished={explorationFinishedHandler}
        />
      )}
    </Card>
  );
}

export default ExplorationPage;
