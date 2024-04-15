import {
  useNotificationData,
  useNotify,
} from '@/providers/NotificationProvider';
import { MdErrorOutline } from 'react-icons/md';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Notification = () => {
  const { message, type } = useNotificationData();

  const notify = useNotify();

  if (!message) return null;

  const handleHide = () => {
    notify('');
  };

  return (
    <motion.div
      animate={{
        y: 5,
      }}
      onClick={handleHide}
      className={`absolute right-0 z-50 m-4 flex h-20 max-w-72 cursor-pointer items-center gap-4 rounded-md bg-gradient-to-r from-customCaramel to-customBlack/60 p-4 font-bold text-customWhite`}
    >
      <span className="flex items-center gap-2 text-lg">
        {type === 'error' ? <MdErrorOutline /> : <IoCheckmarkCircle />}
      </span>
      <div className="w-full">{message}</div>
    </motion.div>
  );
};

export default Notification;
