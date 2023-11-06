import { Affix } from '../../../types';

interface AffixTable {
  primary: Array<{
    name: string;
    stat: Affix;
    range: { min: number; max: number };
  }>;
  secondary: Array<{
    stat: Affix;
    range: {
      min: number;
      max: number;
    };
    label: string;
  }>;
}

const affixTable: AffixTable = {
  primary: [
    { name: 'Malicious', stat: 'intelligence', range: { min: 30, max: 70 } },
    { name: 'Hearthless', stat: 'vitality', range: { min: 30, max: 70 } },
    { name: 'Vicious', stat: 'strength', range: { min: 30, max: 70 } },
    { name: 'Flexible', stat: 'dexterity', range: { min: 30, max: 70 } },
  ],
  secondary: [
    {
      stat: 'criticalChance',
      range: { min: 3, max: 10 },
      label: '{value}% increased critical chance',
    },
    {
      stat: 'dodgeChance',
      range: { min: 3, max: 10 },
      label: '{value}% increased block chance',
    },
    {
      stat: 'fortune',
      range: { min: 5, max: 50 },
      label: '{value}% increased fortune',
    },
  ],
};

export default affixTable;
