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
    { name: 'Hearthless', stat: 'vitality', range: { min: 1, max: 5 } },
    { name: 'Vicious', stat: 'strength', range: { min: 1, max: 5 } },
    { name: 'Flexible', stat: 'agility', range: { min: 1, max: 5 } },
  ],
  secondary: [],
};

export default affixTable;
