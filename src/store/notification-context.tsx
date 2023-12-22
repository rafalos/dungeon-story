import { ReactNode, createContext, useContext, useState } from 'react';

type NotificationContextType = {
  message: string | null;
  setNotification: (message: string | null) => void;
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
  const [message, setMessage] = useState<string | null>(null);

  const setNotification = (notificationMessage: string | null) => {
    setMessage(notificationMessage);
  };

  return (
    <NotificationContext.Provider
      value={{
        message,
        setNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationsProvider;
