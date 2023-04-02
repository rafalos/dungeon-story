import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Exploration from '../components/Exploration/Exploration';
import { generateSeed } from '../Logic/Generator/ExplorationSeed';
import { GPT_STRINGS } from '../utils/contants';
import GPT from '../initializers/gptInitializer';

function ExplorationPage() {
  const [explorationSeed, setExplorationSeed] = useState(null);
  const [explorationStory, setExplorationStory] = useState([]);

  const handleExplorationStart = async () => {
    const newExplorationSeed = generateSeed();
    const GPTInputSequence = newExplorationSeed.map((eventId) => {
      let currentString;
      switch (eventId) {
        case 1:
          currentString = GPT_STRINGS.EXPLORATIONS.BATTLE;
          break;
        case 2:
          currentString = GPT_STRINGS.EXPLORATIONS.TRAP;
          break;
      }
      return currentString;
    });

    GPTInputSequence.unshift(GPT_STRINGS.EXPLORATIONS.ENTRY);
    GPTInputSequence.push(GPT_STRINGS.EXPLORATIONS.ENDING);

    const gptRes = await GPT.createCompletion({
      max_tokens: 2048,
      model: 'text-davinci-003',
      prompt: GPTInputSequence,
    });

    const results = gptRes.data.choices.map((choice) =>
      choice.text.replace(/\n/g, '')
    );

    setExplorationStory(results);

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
        <Exploration
          explorationStory={explorationStory}
          seed={explorationSeed}
          onExplorationFinished={explorationFinishedHandler}
        />
      )}
    </Card>
  );
}

export default ExplorationPage;
