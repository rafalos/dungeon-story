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

export const GENERATE_NAME_STRING = 'Give me random dark game location name';

export const EXPLORATION_STRINGS = {
  ENTRY:
    'You are the warrior entering dark dungeon #LOCATION. Write introduction text max 500 characters',
  BATTLE: 'Continue your story defeating a monster writing max 500 characters',
  TRAP: 'Continue your story after getting out of a trap writing max 500 characters',
  WELL: 'Give me very short max 500 characters continuation of the story after player drunk from mysterious magic well',
  TREASURE:
    'Give me very short max 500 characters continuation of the story after player found mysterious chest full of treasure',
  ENDING:
    'Write max 500 characters ending of your story after successfully leaving the location',
  DEATH:
    'Give me very short max 500 characters story ending after player has died in the dungeon',
};
