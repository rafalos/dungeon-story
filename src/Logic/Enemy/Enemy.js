import { randomElementFromArray, randomInRange } from '../../utils/random';
import { enemyBrackets } from './EnemyBrackets';

const getRandomEnemy = () => {
  const randomEnemy = randomElementFromArray(enemyBrackets);
  return randomEnemy;
};

export { getRandomEnemy };
