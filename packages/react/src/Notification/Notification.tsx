import clsx from "clsx";
import { FC, useEffect, ReactNode, useCallback } from "react";
import { motion, MotionProps } from "framer-motion";
import { useNotification } from "@/NotificationContext";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  withCloseButton?: boolean;
  variant?: "static" | "modal";
  autoHide?: boolean;
  autoHideDuration?: number;
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center";
  title?: string;
  description?: string;
}

export const Notification: FC<NotificationProps> = ({ className, children, onClose, withCloseButton = true, variant = "static", autoHide = true, autoHideDuration = 3000, position = "bottom-right", title, description, ...props }) => {
  const { closeNotification } = useNotification();

  const handleClose = useCallback(() => {
    if (onClose) onClose();
    closeNotification();
  }, [onClose, closeNotification]);

  useEffect(() => {
    if (variant === "modal" && autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [handleClose, variant, autoHide, autoHideDuration]);

  const positionClasses = {
    "top-left": "top-6 left-6",
    "top-center": "top-6 left-1/2 transform -translate-x-1/2",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2",
    "bottom-right": "left-6 sm:left-auto bottom-6 right-6",
    "center": "inset-0 flex items-center justify-center"
  };

  const variants = {
    hidden: { y: 50 },
    visible: { y: 0 },
    exit: { y: 100, transition: { type: "tween", duration: 0.1 } }
  };

  const hasPaddingOverrides = className?.match(/p[xy]-\d+/);

  return (
    <motion.div
      {...(props as MotionProps)}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants} 
      transition={{ type: "spring", stiffness: 500, damping: 25 }} // Spring for enter
      className={clsx(
        "z-30 min-h-20 w-auto sm:w-96 rounded shadow",
        {
          "fixed bg-foreground bg-opacity-50": variant === "modal",
          [positionClasses[position]]: variant === "modal",
        },
        !hasPaddingOverrides && {
          "px-3.5 py-2.5": true,
          "pr-6": withCloseButton
        },
        className
      )}
    >
      {title || description ? (
        <>
          {title && <h2 className="text-lg font-semibold mb-1">{title}</h2>}
          {description && <p className="text-sm">{description}</p>}
          {withCloseButton && (
            <button onClick={handleClose} className="absolute top-2 right-2">
              <XMarkIcon className="size-5" />
            </button>
          )}
        </>
      ) : (
        <>
          {children}
          {withCloseButton && (
            <button onClick={handleClose} className="absolute top-2 right-2">
              <XMarkIcon className="size-5" />
            </button>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Notification;
