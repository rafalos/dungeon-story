import { gemTable } from './gemTable';
import { randomElementFromArray } from '../../utils/random';
import { v4 as uuidv4 } from 'uuid';

export const generateRandomGem = () => {
  const gem = {
    ...randomElementFromArray(gemTable),
    amount: 1,
    id: uuidv4(),
  };
  return gem;
};
