import { ITEM_TYPES } from '../../utils/contants';
import blueCrystalIcon from '../Resources/Icons/Gems/blue-crystal.png';
import blueJewelIcon from '../Resources/Icons/Gems/blue-jewel.png';
import greenCrystalIcon from '../Resources/Icons/Gems/green-crystal.png';
import greenJewelIcon from '../Resources/Icons/Gems/green-jewel.png';
import pinkJewelIcon from '../Resources/Icons/Gems/pink-jewel.png';
import purpleCrystalIcon from '../Resources/Icons/Gems/purple-crystal.png';
import redCrystalIcon from '../Resources/Icons/Gems/red-crystal.png';
import redJewel from '../Resources/Icons/Gems/ruby-jewel.png';
import yellowJewelIcon from '../Resources/Icons/Gems/yellow-jewel.png';

export const gemTable = [
  {
    name: 'Blue crystal',
    type: ITEM_TYPES.GEM,
    icon: blueCrystalIcon,
    price: {
      min: 1000,
    },
  },
  {
    name: 'Blue Jewel',
    type: ITEM_TYPES.GEM,
    icon: blueJewelIcon,
    price: {
      min: 500,
    },
  },
  {
    name: 'Green crystal',
    type: ITEM_TYPES.GEM,
    icon: greenCrystalIcon,
    price: {
      min: 1000,
    },
  },
  {
    name: 'Green jewel',
    type: ITEM_TYPES.GEM,
    icon: greenJewelIcon,
    price: {
      min: 500,
    },
  },
  {
    name: 'Pink jewel',
    type: ITEM_TYPES.GEM,
    icon: pinkJewelIcon,
    price: {
      min: 500,
    },
  },
  {
    name: 'Purple crystal',
    type: ITEM_TYPES.GEM,
    icon: purpleCrystalIcon,
    price: {
      min: 1000,
    },
  },
  {
    name: 'Red crystal',
    type: ITEM_TYPES.GEM,
    icon: redCrystalIcon,
    price: {
      min: 1000,
    },
  },
  {
    name: 'Red jewel',
    type: ITEM_TYPES.GEM,
    icon: redJewel,
    price: {
      min: 500,
    },
  },
  {
    name: 'Yellow jewel',
    type: ITEM_TYPES.GEM,
    icon: yellowJewelIcon,
    price: {
      min: 500,
    },
  },
];
