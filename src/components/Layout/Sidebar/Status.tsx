import ResourceBar from '@/components/UI/ResourceBar';
import SmallLoader from '@/components/UI/SmallLoader';
import { SiPowerautomate } from 'react-icons/si';
import { useUserData } from '@/store/user-slice';

const Status = () => {
  const { isLoading, user } = useUserData();

  if (isLoading) return <SmallLoader />;

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="size-8 flex items-center justify-center  ring-[0.8px] ring-customRed font-sans">
        {user.level}
      </div>
      <div className="text-md flex flex-1 flex-col text-customYellow h-8">
        <ResourceBar
          bgColor="bg-customRed"
          currentResource={user.experience}
          maxResource={user.maxExperience}
        />
        <div className="flex">
          {[...Array(user?.energy)].map((element, index) => (
            <SiPowerautomate key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
