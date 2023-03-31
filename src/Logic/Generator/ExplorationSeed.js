import { randomInRange } from '../../utils/random';

export const generateSeed = () => {
  const explorationSeed = [];
  for (let index = 0; index < 7; index++) {
    explorationSeed.push(randomInRange(1, 2));
  }

  return explorationSeed;
};
