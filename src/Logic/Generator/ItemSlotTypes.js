import headIcon1 from '../Resources/Icons/Armors/icon_plate_head1.png';
import torsoIcon1 from '../Resources/Icons/Armors/icon_cloth_chest1.png';
import ringIcon1 from '../Resources/Icons/Armors/icon_ring1_2.png';
import { EQUIPMENT } from '../../utils/contants';

export default [
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
      name: 'Wooden ring',
      slot: EQUIPMENT.SLOTS.RING1,
      icon: ringIcon1,
      metadata: { fortune: 31 },
    },
  ],
];
