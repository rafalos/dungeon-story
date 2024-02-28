export const EQUIPMENT = {
  SLOTS: {
    HEAD: 'head',
    TORSO: 'torso',
    LEGS: 'legs',
    BOOTS: 'boots',
    RING1: 'ring1',
    LEFT_HAND: 'leftHand',
    RIGHT_HAND: 'rightHand',
  },
};

export const CLASSES = {
  WARRIOR: 'warrior',
};

export const EQUIPMENT_RARITIES = {
  LEGENDARY: 'legendary',
  RARE: 'rare',
  COMMON: 'common',
  MAGIC: 'magic',
};

export const GEM_RARITIES = {
  JEWEL: 'jewel',
  CRYSTAL: 'crystal',
};

export const STATISTICS = {
  DEFENSE: 'defense',
  ATTRIBUTES: {
    STRENGTH: 'strength',
    DEXTERITY: 'dexterity',
    INTELLIGENCE: 'intelligence',
    VITALITY: 'vitality',
    FOTRUNE: 'fortune',
  },
};

export const TIMERS = {
  SHOP: {
    ID: 'shop',
    AMOUNT: 300,
  },
};

export const EVENTS = {
  BATTLE: 'battle',
  TRAP: 'trap',
  WELL: 'well',
  TREASURE: 'treasure',
};

export const GENERATE_NAME_STRING =
  'Give me random fantasy roguelike game location name';

export const EXPLORATION_STRINGS = {
  ENTRY:
    'You are the brave entering dark dungeon #LOCATION. You are writing your own journal. Write your introduction to the story after entering the location max 400 characters',
  BATTLE: 'Continue your story defeating a monster writing max 400 characters',
  TRAP: 'Continue your story after getting out of a trap writing max 500 characters',
  WELL: 'Continue your story after drinking from a mysterious magic well that restores health points and provides experience max 400 characters',
  TREASURE:
    'Continue your story after finding a chest full of treasure max 400 characters',
  ENDING:
    'Write max 500 characters ending of your story after successfully leaving the location',
  DEATH:
    'Give me very short max 500 characters story ending after player has died in the dungeon',
};
