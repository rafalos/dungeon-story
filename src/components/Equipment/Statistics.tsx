type Props = {
  damage: number;
  armor: number;
  criticalChance: number;
  attributes: {
    strength: number;
    agility: number;
    vitality: number;
  };
};

const Statistics = ({ damage, armor, attributes, criticalChance }: Props) => {
  return (
    <div className="p-4 text-sm text-customWhite md:text-lg">
      <h2>Damage: {damage}</h2>
      <h2>Armor: {armor}</h2>
      <h2>Critical chance: {criticalChance}%</h2>
      <h2>Strength: {attributes.strength}</h2>
      <h2>Agility: {attributes.agility}</h2>
      <h2>Vitality: {attributes.vitality}</h2>
    </div>
  );
};

export default Statistics;
