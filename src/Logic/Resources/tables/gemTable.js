import { GEM_RARITIES, ITEM_TYPES } from '../../../utils/contants';
import blueCrystalIcon from '../../Resources/Icons/Gems/blue-crystal.png';
import blueJewelIcon from '../../Resources/Icons/Gems/blue-jewel.png';
import greenCrystalIcon from '../../Resources/Icons/Gems/green-crystal.png';
import greenJewelIcon from '../../Resources/Icons/Gems/green-jewel.png';
import pinkJewelIcon from '../../Resources/Icons/Gems/pink-jewel.png';
import purpleCrystalIcon from '../../Resources/Icons/Gems/purple-crystal.png';
import redCrystalIcon from '../../Resources/Icons/Gems/red-crystal.png';
import redJewel from '../../Resources/Icons/Gems/ruby-jewel.png';
import yellowJewelIcon from '../../Resources/Icons/Gems/yellow-jewel.png';
import { v4 as uuidv4 } from 'uuid';

export const gemTable = {
  [GEM_RARITIES.CRYSTAL]: [
    {
      name: 'Blue crystal',
      type: ITEM_TYPES.GEM,
      icon: blueCrystalIcon,
      sellPrice: 1000,
      id: uuidv4(),
    },
    {
      name: 'Green crystal',
      type: ITEM_TYPES.GEM,
      icon: greenCrystalIcon,
      sellPrice: 1000,
      id: uuidv4(),
    },
    {
      name: 'Purple crystal',
      type: ITEM_TYPES.GEM,
      icon: purpleCrystalIcon,
      sellPrice: 1000,
      id: uuidv4(),
    },
    {
      name: 'Red crystal',
      type: ITEM_TYPES.GEM,
      icon: redCrystalIcon,
      sellPrice: 1000,
      id: uuidv4(),
    },
  ],
  [GEM_RARITIES.JEWEL]: [
    {
      name: 'Blue Jewel',
      type: ITEM_TYPES.GEM,
      icon: blueJewelIcon,
      sellPrice: 500,
      id: uuidv4(),
    },

    {
      name: 'Green jewel',
      type: ITEM_TYPES.GEM,
      icon: greenJewelIcon,
      sellPrice: 500,
      id: uuidv4(),
    },
    {
      name: 'Pink jewel',
      type: ITEM_TYPES.GEM,
      icon: pinkJewelIcon,
      sellPrice: 500,
      id: uuidv4(),
    },

    {
      name: 'Red jewel',
      type: ITEM_TYPES.GEM,
      icon: redJewel,
      sellPrice: 500,
      id: uuidv4(),
    },
    {
      name: 'Yellow jewel',
      type: ITEM_TYPES.GEM,
      icon: yellowJewelIcon,
      sellPrice: 500,
      id: uuidv4(),
    },
  ],
};
