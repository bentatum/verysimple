import { FC, forwardRef } from "react";
import { Dialog as DialogPrimitive } from "@headlessui/react";
import clsx from "clsx";
import DialogCloseButton from "./components/DialogCloseButton";
import type { $ElementProps } from "../types";
import Card, { CardProps } from "../Card";

export type DialogProps = $ElementProps<typeof DialogPrimitive> &
  CardProps & {
    overlayProps?: $ElementProps<typeof DialogPrimitive.Overlay>;
    showCloseButton?: boolean;
  };

export const Dialog: FC<DialogProps> = forwardRef(
  (
    {
      children,
      open,
      overlayProps,
      onClose,
      showCloseButton,
      initialFocus,
      className = "",
      disableOverlay,
      ...props
    },
    ref
  ) => {
    return (
      <DialogPrimitive
        ref={ref}
        open={open}
        initialFocus={initialFocus}
        {...props}
        onClose={onClose}
        className="fixed z-30 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <DialogPrimitive.Overlay
            {...overlayProps}
            className={clsx(
              "z-10 fixed inset-0 bg-black/40 backdrop-blur",
              overlayProps?.className
            )}
          />
          <Card
            className={clsx(
              "z-20 shadow-2xl relative",
              {
                "p-7": !className.match(/p-/),
                "m-7": !className.match(/m-/),
                "w-full max-w-prose": !className.match(/w-|max-w-/),
                "bg-foreground": !className.match(/bg-/),
              },
              className
            )}
          >
            <>
              {showCloseButton && (
                <div className="hidden sm:block absolute top-3 right-3 z-10">
                  <DialogCloseButton onClick={() => onClose(true)} />
                </div>
              )}
              {children}
            </>
          </Card>
        </div>
      </DialogPrimitive>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;
