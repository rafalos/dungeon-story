import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';

function ExplorationPage() {
  const [explorationSeed, setExplorationSeed] = useState(null);
  const handleExplorationStart = () => {
    const newExplorationSeed = generateSeed();

    setExplorationSeed(newExplorationSeed);
  };

  const explorationFinishedHandler = () => {
    setExplorationSeed(null);
  };

  return (
    <Card>
      {!explorationSeed ? (
        <button onClick={handleExplorationStart}>Start new</button>
      ) : (
        explorationSeed && (
          <Exploration
            seed={explorationSeed}
            onExplorationFinished={explorationFinishedHandler}
          />
        )
      )}
    </Card>
  );
}

export default ExplorationPage;