import { randomInRange } from './random';
import store from '../store/index';

export const getBasicDamage = (enemyDefense) => {
  const playerMinAttack = store.getState().statistics.minDamage;
  const playerMaxAttack = store.getState().statistics.maxDamage;

  let damage =
    randomInRange(playerMinAttack, playerMaxAttack) - enemyDefense * 0.2;
  if (damage < 0) return 1;
  return Math.floor(damage);
};
