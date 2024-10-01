import clsx from "clsx";
import { FC, useEffect, ReactNode } from "react";

export interface NotificationProps {
  children: ReactNode;
  onClose?: () => void;
  variant?: "static" | "modal";
  autoHide?: boolean;
  autoHideDuration?: number;
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center";
}

export const Notification: FC<NotificationProps> = ({ children, onClose, variant = "static", autoHide = false, autoHideDuration = 3000, position = "bottom-right" }) => {
  useEffect(() => {
    if (variant === "modal" && autoHide) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [onClose, variant, autoHide, autoHideDuration]);

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 transform -translate-x-1/2",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 transform -translate-x-1/2",
    "bottom-right": "bottom-0 right-0",
    "center": "inset-0 flex items-center justify-center"
  };

  return (
    <div
      className={clsx(
        "z-30 h-20 w-full sm:w-96 p-4 rounded shadow-lg",
        {
          "fixed bg-foreground bg-opacity-50": variant === "modal",
          [positionClasses[position]]: variant === "modal"
        }
      )}
    >
      {children}
      {onClose && (
        <button onClick={onClose} className="ml-4">
          Close
        </button>
      )}
    </div>
  );
};

export default Notification;