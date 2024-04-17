import { randomInRange, unflooredRandomInRange } from '../../utils/random';

export const getHealth = (vitality: number) => {
  return vitality * 10;
};

export const calculateHit = (
  damage: number,
  strengthAmount: number,
  opponentsArmor: number
) => {
  const hitAmount = unflooredRandomInRange(0, damage + strengthAmount / 2);

  const finalHit = +(hitAmount - opponentsArmor / 2).toFixed(2);

  return finalHit < 0 ? 0 : finalHit;
};
