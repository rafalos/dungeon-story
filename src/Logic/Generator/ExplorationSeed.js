import { EVENTS } from '../../utils/contants';
import { randomInRange, randomWithProbability } from '../../utils/random';
import { EVENT_PROBABILITY } from '../Resources/tables/eventTable';

export const generateSeed = () => {
  const explorationSeed = [];
  for (let index = 0; index < 2; index++) {
    explorationSeed.push(randomWithProbability(EVENT_PROBABILITY));
  }

  return explorationSeed;
};
