import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';
import { useGptStory } from '../hooks/useGptStory';

function ExplorationPage() {
  const [explorationSeed, setExplorationSeed] = useState(generateSeed());
  const [isLoading, story, loadingProgress] = useGptStory(explorationSeed);

  const handleExplorationStart = async () => {
    setExplorationSeed(explorationSeed);
  };

  const explorationFinishedHandler = () => {
    setExplorationSeed(null);
  };

  return (
    <Card>
      {explorationSeed ? (
        <div>
          {isLoading ? (
            <div>
              The story is being generated. Stay tuned! {loadingProgress}%
            </div>
          ) : (
            <Exploration
              explorationStory={story}
              seed={explorationSeed}
              onExplorationFinished={explorationFinishedHandler}
            />
          )}
        </div>
      ) : (
        'The story has ended'
      )}

      {/* {!explorationSeed ? (
        <button onClick={handleExplorationStart}>Start new</button>
      ) : (
        <Exploration
          explorationStory={story}
          isLoading={isLoading}
          seed={explorationSeed}
          onExplorationFinished={explorationFinishedHandler}
        />
      )} */}
    </Card>
  );
}

export default ExplorationPage;
