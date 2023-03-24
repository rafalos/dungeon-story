import KnightBasicAttack from './Icons/Skills/35.png';
import constants from '../../Constants';

export default {
  knight: {
    roleName: constants.classes.WARRIOR_CLASS,
    startingStats: {
      strength: 5,
      dexterity: 3,
      intelligence: 3,
      vitality: 5,
      critChance: 0,
      blockChance: 5,
      fortune: 0,
      coldDamage: 0,
      lifeSteal: 0,
      bloodDamage: 0,
      lightingDamage: 0,
      fireDamage: 0,
      speed: 5,
    },
    startingSkills: [
      {
        name: 'Basic attack',
        icon: KnightBasicAttack,
        damage: {
          min: 1,
          max: 5,
        },
      },
    ],
  },
  wizard: {

  },
  ranger: {

  },
};
