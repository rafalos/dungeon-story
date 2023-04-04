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

export const ITEM_RARITIES = {
  LEGENDARY: 'legendary',
  RARE: 'rare',
  COMMON: 'common',
  MAGIC: 'magic',
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

export const ITEM_TYPES = {
  GEAR: 'gear',
  POTION: 'potion',
  GEM: 'gem',
};

export const TIMERS = {
  SHOP: {
    ID: 'shop',
    AMOUNT: 10,
  },
};

export const GPT_STRINGS = {
  EXPLORATIONS: {
    ENTRY: 'Give me very short dark fantasy solo roguelike entry dungeon text',
    BATTLE:
      'Give me very short continuation of the story after defeating a monster',
    TRAP: 'Give me very short continuation of the story after getting out of the trap',
    ENDING: 'Give me very short story ending afer leaving the dungeon',
  },
};

export const DROP_RATES = {
  EQUIPMENT: {
    BASE: 50,
    ROLLS: 2,
    RARITY: {
      LEGENDARY: 5,
      MAGIC: 35,
      RARE: 20,
      COMMON: 40,
    },
  },
  GOLD: {
    ROLLS: 1,
    BASE: 100,
  },
  GEM: {
    ROLLS: 5,
    RARITY: {
      JEWEL: 75,
      CRYSTAL: 25,
    },
  },
  POTION: {
    ROLLS: 2,
    BASE: 50,
  },
};
