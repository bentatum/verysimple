import { createContext, FC, ReactNode, useContext, useState, cloneElement, isValidElement } from "react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

interface NotificationContextProps {
  showNotification: (content: ReactNode) => void;
  closeNotification: () => void;
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

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, closeNotification }}>
      {children}
      <AnimatePresence>
        {notification}
      </AnimatePresence>
    </NotificationContext.Provider>
  );
};
