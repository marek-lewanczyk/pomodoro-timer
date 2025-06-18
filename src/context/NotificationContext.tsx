import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import Notification from '@/components/UI/Notification/Notification.tsx';
import type { NotificationContextType } from '@/types/notification.ts';

const NotificationContext = createContext<NotificationContextType>({
  message: null,
  showNotification: () => {},
});

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); // 3 sekundy
  };

  return (
    <NotificationContext.Provider value={{ message, showNotification }}>
      {children}
      {message &&
        createPortal(<Notification message={message} />, document.getElementById('modal-root')!)}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
