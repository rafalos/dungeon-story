import {
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import { RARITY_CHANCES } from '../resources/tables/loot';
import { Gem } from '../../types';
import { crystal, jewel } from '../resources/tables/gem';

export const generateRandomGem = (): Gem => {
  const gemRarity = randomWithProbability(RARITY_CHANCES.GEM);

  const arrayToDraw = gemRarity === 'crystal' ? crystal : jewel;

  const gem = {
    ...randomElementFromArray(arrayToDraw),
    amount: 1,
  };
  return gem;
};
