import { createContext, FC, ReactNode, useContext, useState, cloneElement, isValidElement } from "react";
import Notification, { NotificationProps } from "@/Notification";

interface NotificationContextProps {
  showNotification: (content: ReactNode) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<ReactNode | null>(null);

  const showNotification = (content: ReactNode) => {
    if (isValidElement(content)) {
      setNotification(cloneElement(content, { variant: "modal" } as any));
    } else {
      setNotification(content);
    }
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification}
    </NotificationContext.Provider>
  );
};