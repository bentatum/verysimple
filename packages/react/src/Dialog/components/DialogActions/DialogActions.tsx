import clsx from "clsx";
import { ComponentPropsWithRef, FC, forwardRef, ReactNode } from "react";

export interface DialogActionsProps extends ComponentPropsWithRef<"nav"> {
  children: ReactNode;
}

export const DialogActions: FC<DialogActionsProps> = forwardRef<
  HTMLElement,
  DialogActionsProps
>(({ className = "", ...props }, ref) => {
  return (
    <nav
      {...props}
      ref={ref}
      className={clsx(
        "flex items-center space-x-2",
        {
          "pb-4": !className.match(/pb-\d+|p-\d+/),
          "px-5": !className.match(/px-\d+|p-\d+/),
          "justify-end": !className.match(/justify-/),
        },
        className
      )}
    />
  );
});

DialogActions.displayName = "DialogActions";

export default DialogActions;
