import { randomInRange } from './random';

export const getBasicDamage = (minDamage, maxDamage, enemyDefense) => {
  let damage = randomInRange(minDamage, maxDamage) - enemyDefense * 0.2;
  if (damage < 0) return 1;
  return damage;
};
