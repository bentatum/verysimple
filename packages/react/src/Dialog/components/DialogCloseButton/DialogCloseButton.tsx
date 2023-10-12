import { IconButton, IconButtonProps } from "@/IconButton";
import { forwardRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface DialogCloseButtonProps extends IconButtonProps {}

export const DialogCloseButton = forwardRef<
  HTMLButtonElement,
  DialogCloseButtonProps
>((props, ref) => {
  return (
    <IconButton aria-label="Close" {...props} ref={ref}>
      <XMarkIcon className="h-7 w-7" />
    </IconButton>
  );
});

DialogCloseButton.displayName = "DialogCloseButton";

export default DialogCloseButton;
