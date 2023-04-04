import headIcon1 from '../Resources/Icons/Armors/icon_plate_head1.png';
import torsoIcon1 from '../Resources/Icons/Armors/icon_cloth_chest1.png';
import ringIcon1 from '../Resources/Icons/Armors/icon_ring1_2.png';
import ringIcon2 from '../Resources/Icons/Armors/ring.png';
import longswordIcon1 from '../Resources/Icons/Weapons/icon_sword_long1.png';
import shortswordIcon1 from '../Resources/Icons/Weapons/icon_sword_short1.png';
import axeIcon1 from '../Resources/Icons/Weapons/icon_axe1.png';
import bowIcon1 from '../Resources/Icons/Weapons/icon_Bow1.png';

import { EQUIPMENT } from '../../utils/contants';

export default [
  [
    {
      name: 'Iron longsword',
      slot: EQUIPMENT.SLOTS.LEFT_HAND,
      icon: longswordIcon1,
      metadata: {
        strength: 30,
      },
    },
  ],
  [
    {
      name: 'Iron shortsword',
      slot: EQUIPMENT.SLOTS.LEFT_HAND,
      icon: shortswordIcon1,
      metadata: {
        strength: 20,
      },
    },
  ],
  [
    {
      name: 'Iron axe',
      slot: EQUIPMENT.SLOTS.LEFT_HAND,
      icon: axeIcon1,
      metadata: {
        strength: 27,
      },
    },
  ],
  [
    {
      name: 'Shortbow',
      slot: EQUIPMENT.SLOTS.LEFT_HAND,
      icon: bowIcon1,
      metadata: {
        dexterity: 21,
      },
    },
  ],
  [
    {
      name: 'Plate helmet',
      slot: EQUIPMENT.SLOTS.HEAD,
      icon: headIcon1,
      metadata: { defense: 52 },
    },
  ],
  [
    {
      name: 'Cloth Torso',
      slot: EQUIPMENT.SLOTS.TORSO,
      icon: torsoIcon1,
      metadata: { defense: 101 },
    },
  ],
  [
    {
      name: 'Gold ring',
      slot: EQUIPMENT.SLOTS.RING1,
      icon: ringIcon1,
      metadata: { fortune: 31 },
    },
  ],
  [
    {
      name: 'Wooden ring',
      slot: EQUIPMENT.SLOTS.RING1,
      icon: ringIcon2,
      metadata: { fortune: 10 },
    },
  ],
];
