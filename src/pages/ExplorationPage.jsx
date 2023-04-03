import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';
import { useGptStory } from '../hooks/useGptStory';

function ExplorationPage() {
  const [explorationSeed, setExplorationSeed] = useState(null);
  const [isLoading, story, loadingProgress] = useGptStory(explorationSeed);

  const handleExplorationStart = async () => {
    setExplorationSeed(generateSeed());
  };

  const explorationFinishedHandler = () => {
    setExplorationSeed(null);
  };

  return (
    <Card>
      {!explorationSeed && (
        <button onClick={handleExplorationStart}>Start new exploration</button>
      )}
      {explorationSeed && isLoading && (
        <div>The story is being generated. Stay tuned! {loadingProgress}%</div>
      )}
      {!isLoading && explorationSeed && (
        <Exploration
          explorationStory={story}
          seed={explorationSeed}
          onExplorationFinished={explorationFinishedHandler}
        />
      )}
    </Card>
  );
}

export default ExplorationPage;
