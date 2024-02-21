import { ReactNode, createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'error';

type NotificationContextType = {
  message: string;
  notify: (
    message: string,
    notificationType?: NotificationType,
    timeout?: number
  ) => void;
  type: NotificationType;
};

type NotificationsProviderProps = {
  children: ReactNode;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const notificationContext = useContext(NotificationContext);

  if (!notificationContext) {
    throw new Error(
      'Notification Context is possibly out of the scope of its provider'
    );
  }

  return notificationContext;
};

const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<NotificationType>('success');

  const notify = (
    notificationMessage: string,
    notificationType: NotificationType = 'error',
    timeout: number = 5
  ) => {
    setMessage(notificationMessage);
    setType(notificationType);

    setTimeout(() => {
      setMessage('');
    }, timeout * 1000);
  };

  return (
    <NotificationContext.Provider
      value={{
        message,
        type,
        notify,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotify = () => {
  const { notify } = useNotification();

  return notify;
};

export const useNotificationData = () => {
  const { message, type } = useNotification();

  return { message, type };
};

export default NotificationsProvider;
