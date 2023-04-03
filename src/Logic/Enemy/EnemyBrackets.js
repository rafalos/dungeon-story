import BirdIcon from '../Resources/Icons/Enemies/bird.png';
import DroneIcon from '../Resources/Icons/Enemies/drone.png';
import GreenGooIcon from '../Resources/Icons/Enemies/Green_goo.png';
import OutlawIcon from '../Resources/Icons/Enemies/outlaw.png';
import PirateIcon from '../Resources/Icons/Enemies/pirate.png';
import ScoutMachineIcon from '../Resources/Icons/Enemies/scoutmachine.png';
import SalamanderIcon from '../Resources/Icons/Enemies/salamander.png';
import ShelloIcon from '../Resources/Icons/Enemies/shello.png';
import WailingPrinceIcon from '../Resources/Icons/Enemies/wailingprince.png';
import WitchIcon from '../Resources/Icons/Enemies/witch.png';

export const enemyBrackets = [
  {
    name: 'Drone',
    damage: {
      min: 5,
      max: 15,
    },
    icon: DroneIcon,
    currentHealth: 30,
    maxHealth: 30,
    experience: {
      min: 25,
      max: 50,
    },
    defense: 5,
  },
  {
    name: 'Green Goo',
    icon: GreenGooIcon,
    damage: {
      min: 10,
      max: 20,
    },
    currentHealth: 40,
    maxHealth: 40,
    experience: {
      min: 30,
      max: 50,
    },
    defense: 2,
  },
  {
    name: 'Bird',
    icon: BirdIcon,
    damage: {
      min: 7,
      max: 12,
    },
    currentHealth: 35,
    maxHealth: 35,
    experience: {
      min: 20,
      max: 50,
    },
    defense: 3,
  },
  {
    name: 'Scout Machine',
    icon: ScoutMachineIcon,
    damage: {
      min: 8,
      max: 18,
    },
    currentHealth: 25,
    maxHealth: 25,
    experience: {
      min: 15,
      max: 50,
    },
    defense: 1,
  },
  {
    name: 'Shello',
    icon: ShelloIcon,
    damage: {
      min: 12,
      max: 22,
    },
    currentHealth: 45,
    maxHealth: 45,
    experience: {
      min: 35,
      max: 50,
    },
    defense: 4,
  },
  {
    name: 'Outlaw',
    icon: OutlawIcon,
    damage: {
      min: 20,
      max: 30,
    },
    currentHealth: 50,
    maxHealth: 50,
    experience: {
      min: 50,
      max: 50,
    },
    defense: 6,
  },
  {
    name: 'Pirate',
    icon: PirateIcon,
    damage: {
      min: 15,
      max: 25,
    },
    currentHealth: 40,
    maxHealth: 40,
    experience: {
      min: 40,
      max: 70,
    },
    defense: 5,
  },
  {
    name: 'Wailing Prince',
    icon: WailingPrinceIcon,
    damage: {
      min: 25,
      max: 35,
    },
    currentHealth: 60,
    maxHealth: 60,
    experience: {
      min: 75,
      max: 100,
    },
    defense: 8,
  },
  {
    name: 'Witch',
    icon: WitchIcon,
    damage: {
      min: 30,
      max: 40,
    },
    currentHealth: 70,
    maxHealth: 70,
    experience: {
      min: 100,
      max: 130,
    },
    defense: 10,
  },
  {
    name: 'Salamander',
    icon: SalamanderIcon,
    damage: {
      min: 35,
      max: 45,
    },
    currentHealth: 80,
    maxHealth: 80,
    experience: {
      min: 125,
      max: 150,
    },
    defense: 12,
  },
];
