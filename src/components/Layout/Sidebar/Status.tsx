import ResourceBar from '@/components/UI/ResourceBar';
import SmallLoader from '@/components/UI/SmallLoader';

import { useUserData } from '@/store/user-slice';

const Status = () => {
  const { isLoading, user } = useUserData();

  if (isLoading) return <SmallLoader />;

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
