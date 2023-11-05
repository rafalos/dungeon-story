import { useSelector } from 'react-redux';
import ResourceBar from '@/components/UI/ResourceBar';
import goldIcon from '@/Logic/Resources/Icons/gold.png';

const Status = () => {
  const player = useSelector((state) => state.status);
  const { currentHealth, maxHealth } = useSelector((state) => state.statistics);
  return (
    <div className='flex justify-center items-center w-full bg-zinc-600 p-4 gap-2'>
      <div className='w-28 flex justify-center text-3xl'>{player.level}</div>
      <div className='w-full flex flex-col gap-2'>
        <ResourceBar
          bgColor='bg-yellow-600'
          label='Experience'
          currentResource={player.experience}
          maxResource={player.maxExperience}
        />
        <ResourceBar
          bgColor='bg-red-800'
          label='Health'
          currentResource={currentHealth}
          maxResource={maxHealth}
        />
      </div>
    </div>
  );
};

export default Status;
