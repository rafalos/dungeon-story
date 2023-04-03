import { randomInRange } from '../../utils/random';

export const generateSeed = () => {
  const explorationSeed = [];
  for (let index = 0; index < 3; index++) {
    explorationSeed.push(randomInRange(1, 3));
  }

  return explorationSeed;
};
