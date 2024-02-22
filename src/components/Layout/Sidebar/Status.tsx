import ResourceBar from '@/components/UI/ResourceBar';
import SmallLoader from '@/components/UI/SmallLoader';
import { SiPowerautomate } from 'react-icons/si';
import { useUserData } from '@/store/user-slice';

const Status = () => {
  const { isLoading, user } = useUserData();

  if (isLoading) return <SmallLoader />;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="text-l inline-block rounded-t-lg bg-gray-500/20 p-4 font-bold">
          Level: {user.level}
        </div>

        <ResourceBar
          bgColor="bg-red-700"
          currentResource={user.experience}
          maxResource={user.maxExperience}
        />
        <div className="flex text-2xl text-customYellow">
          {[...Array(user?.energy)].map((element, index) => (
            <SiPowerautomate key={index} />
          ))}
          <div>Gold: {user.gold}</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
