import { ITEM_TYPES } from '../../utils/contants';
import potionIcon from '../Resources/Icons/Potions/potion_1_red.png';
import { v4 as uuidv4 } from 'uuid';

class HealthPotion {
  id = uuidv4();
  name = 'Health potion';
  type = ITEM_TYPES.POTION;
  icon = potionIcon;
  amount = 5;
}

const genericPotion = new HealthPotion();

export const generateNewHealthPotion = () => {
  return {
    ...genericPotion,
  };
};
