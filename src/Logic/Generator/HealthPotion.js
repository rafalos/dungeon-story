import { ITEM_TYPES } from '../../utils/contants';
import potionIcon from '../Resources/Icons/Potions/potion-red.png';
import { v4 as uuidv4 } from 'uuid';

class HealthPotion {
  id = uuidv4();
  name = 'Health potion';
  type = ITEM_TYPES.POTION;
  icon = potionIcon;
  amount = 1;
}

const genericPotion = new HealthPotion();

export const generateNewHealthPotion = () => {
  return {
    ...genericPotion,
  };
};
