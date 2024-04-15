import { randomInRange } from '../../utils/random';

export const getHealth = (vitality: number) => {
  return vitality * 10;
};

export const calculateHit = (
  damage: number,
  strengthAmount: number,
  opponentsArmor: number
) => {
  const hitAmount = randomInRange(0, damage + strengthAmount / 2);

  return Math.abs(hitAmount - opponentsArmor / 2);
};

calculateHit(8, 4, 4);
