import { gemTable } from '../Resources/tables/gemTable';
import {
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import { RARITY_CHANCES } from '../Resources/tables/lootTable';

export const generateRandomGem = () => {
  const gemRarity = randomWithProbability(RARITY_CHANCES.GEM);
  const gem = {
    ...randomElementFromArray(gemTable[gemRarity]),
    amount: 1,
  };
  return gem;
};
