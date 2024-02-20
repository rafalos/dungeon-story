import { ExplorationSeed } from '../../types';
import { randomWithProbability } from '../../utils/random';
import { EVENT_PROBABILITY } from '../resources/tables/event';

export const generateSeed = (): ExplorationSeed => {
  const explorationSeed: ExplorationSeed = [];
  for (let index = 0; index < 5; index++) {
    explorationSeed.push(randomWithProbability(EVENT_PROBABILITY));
  }

  return explorationSeed;
};
