import ResourceBar from '../../../UI/ResourceBar';
import { Entity } from '@/types';
import Sprite from '@/components/UI/Sprite';
import { GiArmorVest, GiBroadsword, GiHearts } from 'react-icons/gi';

function BattleEntityPanel({
  armor,
  damage,
  health,
  name,
  spritesheet,
  currentHealth,
}: Entity & {
  currentHealth: number;
}) {
  return (
    <div className="flex w-[200px] flex-col items-center justify-between gap-8 rounded-lg bg-gradient-to-b from-gray-700 to-customRed/60 p-4 text-customWhite">
      <h2 className="text-lg font-bold">{name}</h2>
      <Sprite spriteCount={4} spriteSize={16} spritesheetURL={spritesheet} />
      <ResourceBar
        bgColor="bg-customRed"
        currentResource={currentHealth}
        maxResource={health}
      />
      <ul className="text-sm font-bold">
        <li>
          <span className="flex items-center justify-center gap-2">
            <GiHearts /> {health}
          </span>
        </li>
        <li>
          <span className="flex items-center justify-center gap-2">
            <GiBroadsword /> {damage}
          </span>
        </li>
        <li>
          <span className="flex items-center justify-center gap-2">
            <GiArmorVest /> {armor}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default BattleEntityPanel;
