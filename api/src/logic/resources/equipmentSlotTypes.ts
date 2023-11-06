import { EquipmentBase } from '../../types';
import { EQUIPMENT } from '../../utils/constants';

const Equipment: EquipmentBase[] = [
  {
    name: 'Iron longsword',
    slot: 'weapon',
    icon: 'longswordIcon1',
    modifiers: [['strength', 28]],
  },
  {
    name: 'Iron shortsword',
    slot: 'weapon',
    icon: 'shortswordIcon1',
    modifiers: [['strength', 30]],
  },

  {
    name: 'Iron axe',
    slot: 'weapon',
    icon: 'axeIcon1',
    modifiers: [['strength', 27]],
  },

  {
    name: 'Shortbow',
    slot: 'weapon',
    icon: 'bowIcon1',
    modifiers: [['dexterity', 21]],
  },

  {
    name: 'Plate helmet',
    slot: 'head',
    icon: 'headIcon1',
    modifiers: [['defense', 52]],
  },

  {
    name: 'Cloth Torso',
    slot: 'torso',
    icon: 'torsoIcon3',
    modifiers: [['defense', 31]],
  },

  {
    name: 'Golden Plate',
    slot: 'torso',
    icon: 'torsoIcon2',
    modifiers: [['defense', 101]],
  },

  {
    name: 'Iron Chestplate',
    slot: 'torso',
    icon: 'torsoIcon1',
    modifiers: [['defense', 57]],
  },

  {
    name: 'Gold ring',
    slot: 'ring',
    icon: 'ringIcon1',
    modifiers: [['fortune', 31]],
  },
  {
    name: 'Wooden ring',
    slot: 'ring',
    icon: 'ringIcon2',
    modifiers: [['fortune', 10]],
  },
];

export default Equipment;
