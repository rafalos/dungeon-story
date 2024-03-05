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
    <div className="flex gap-4 p-4 text-sm text-customWhite md:text-lg">
      <ul>
        <h2 className="mb-2 border-b-4 border-b-customCaramel p-1 text-lg">
          Power
        </h2>
        <li>Damage: {damage}</li>
        <li>Armor: {armor}</li>
        <li>Critical chance: {criticalChance}%</li>
      </ul>

      <ul>
        <h2 className="mb-2 border-b-4 border-b-customCaramel p-1 text-lg">
          Attributes
        </h2>
        <li>Strength: {attributes.strength}</li>
        <li>Agility: {attributes.agility}</li>
        <li>Vitality: {attributes.vitality}</li>
      </ul>
    </div>
  );
};

export default Statistics;
