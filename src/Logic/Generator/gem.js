import { gemTable } from '../Resources/tables/gemTable';
import {
  randomElementFromArray,
  randomWithProbability,
} from '../../utils/random';
import { v4 as uuidv4 } from 'uuid';
import { RARITY_CHANCES } from '../Resources/tables/lootTable';

const sharedID = uuidv4();

export const generateRandomGem = () => {
  const gemRarity = randomWithProbability(RARITY_CHANCES.GEM);
  const gem = {
    ...randomElementFromArray(gemTable[gemRarity]),
    amount: 1,
    id: sharedID,
  };
  return gem;
};
