import ResourceBar from '@/components/UI/ResourceBar';
import SmallLoader from '@/components/UI/SmallLoader';
import { SiPowerautomate } from 'react-icons/si';
import { useUserData } from '@/store/user-slice';

const Status = () => {
  const { isLoading, user } = useUserData();

  if (isLoading) return <SmallLoader />;

  return (
    <div className="flex items-center justify-center ">
      <div className="flex h-8 w-12 items-center justify-center bg-customRed text-3xl font-bold">
        {user.level}
      </div>
      <div className="text-md flex w-full flex-col text-customYellow">
        <ResourceBar
          bgColor="bg-red-700"
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
