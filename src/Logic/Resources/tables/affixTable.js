export default {
  primary: [
    { name: 'Malicious', stat: 'intelligence', range: { min: 30, max: 70 } },
    { name: 'Hearthless', stat: 'vitality', range: { min: 30, max: 70 } },
    { name: 'Vicious', stat: 'strength', range: { min: 30, max: 70 } },
    { name: 'Flexible', stat: 'dexterity', range: { min: 30, max: 70 } },
  ],
  secondary: [
    {
      stat: 'critChance',
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
    {
      stat: 'lifeSteal',
      range: { min: 5, max: 20 },
      label: '{value}% life steal',
    },
    {
      stat: 'fireDamage',
      range: { min: 5, max: 30 },
      label: 'Adds {value}% fire damage',
    },
    {
      stat: 'coldDamage',
      range: { min: 5, max: 30 },
      label: 'Adds {value}% cold damage',
    },
    {
      stat: 'lightingDamage',
      range: { min: 5, max: 30 },
      label: 'Adds lighting damage',
    },
    {
      stat: 'bloodDamage',
      range: { min: 5, max: 30 },
      label: 'Adds {value}% blood damage',
    },
  ],
};
