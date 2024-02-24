import ResourceBar from '@/components/UI/ResourceBar';
import SmallLoader from '@/components/UI/SmallLoader';
import { SiPowerautomate } from 'react-icons/si';
import { useUserData } from '@/store/user-slice';
import { GiTwoCoins } from 'react-icons/gi';

const Status = () => {
  const { isLoading, user } = useUserData();

  if (isLoading) return <SmallLoader />;

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="size-9 flex items-center justify-center font-sans bg-customRed">
        {user.level}
      </div>
      <div className="text-md flex h-9 flex-1 flex-col text-customYellow">
        <ResourceBar
          bgColor="bg-customRed"
          currentResource={user.experience}
          maxResource={user.maxExperience}
        />
        <div className="flex items-center justify-between">
          <span className="flex">
            {[...Array(user?.energy)].map((_, index) => (
              <SiPowerautomate key={index} />
            ))}
          </span>
          <span className="flex items-center gap-2">
            <GiTwoCoins />
            {user.gold}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Status;
