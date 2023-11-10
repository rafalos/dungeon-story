import {
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import { GEM_RARITY_CHANCES } from '../resources/tables/loot';
import { Gem } from '../../types';
import { crystal, jewel } from '../resources/tables/gem';

export const generateRandomGem = (): Gem => {
  const gemRarity = randomWithProbability(GEM_RARITY_CHANCES);

  const arrayToDraw = gemRarity === 'crystal' ? crystal : jewel;

  const gem = {
    ...randomElementFromArray(arrayToDraw),
    amount: 1,
  };
  return gem;
};
