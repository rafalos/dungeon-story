import { useSelector } from 'react-redux';
import ResourceBar from '@/components/UI/ResourceBar';
import goldIcon from '@/Logic/Resources/Icons/gold.png';
import Container from '@/components/UI/Container';

const Status = () => {
  const player = useSelector((state) => state.status);
  const { currentHealth, maxHealth } = useSelector((state) => state.statistics);
  return (
    <div className="flex flex-col gap-2 rounded-md p-4">
      <div className="text-3xl">Level: {player.level}</div>

      <ResourceBar
        bgColor="bg-customYellow"
        label="Experience"
        currentResource={player.experience}
        maxResource={player.maxExperience}
      />
      <ResourceBar
        bgColor="bg-customRed"
        label="Health"
        currentResource={currentHealth}
        maxResource={maxHealth}
      />
    </div>
  );
};

export default Status;
