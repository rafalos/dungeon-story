import { useNotificationData } from '@/providers/NotificationProvider';
import { twMerge } from 'tailwind-merge';
import { MdErrorOutline } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

const Notification = () => {
  const { message, type } = useNotificationData();

  if (!message) return null;

  const classes =
    type === 'error'
      ? 'text-red-700 border-red-700'
      : 'text-green-700 border-green-700';

  return (
    <div
      className={twMerge(
        `absolute right-0 z-50 m-4 flex h-32 w-72 animate-moveAppear flex-col items-center justify-around rounded-lg border-2 bg-customWhite p-4 text-lg font-bold text-customBlack`,
        classes
      )}
    >
      <span className="flex items-center justify-center gap-2 text-2xl">
        {type === 'error' ? (
          <>
            <MdErrorOutline />
            Failure
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline />
            Success
          </>
        )}
      </span>
      <div className="w-full">{message}</div>
    </div>
  );
};

export default Notification;
