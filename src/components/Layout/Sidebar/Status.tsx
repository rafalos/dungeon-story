import { useSelector } from 'react-redux';
import ResourceBar from '@/components/UI/ResourceBar';
import goldIcon from '@/Logic/Resources/Icons/gold.png';
import Container from '@/components/UI/Container';
import { useAppSelector } from '@/store';
import { useUserData } from '@/store/user-slice';

const Status = () => {
  const user = useUserData();

  return (
    <div className="flex flex-col gap-2 rounded-md p-4">
      <div className="text-3xl">Level: {user.level}</div>
      <div>Gold: {user.gold}</div>

      <ResourceBar
        bgColor="bg-customYellow"
        label="Experience"
        currentResource={user.experience}
        maxResource={user.maxExperience}
      />
    </div>
  );
};

export default Status;
