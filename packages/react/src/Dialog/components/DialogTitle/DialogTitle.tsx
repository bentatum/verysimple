import { DialogTitle as DialogTitlePrimitive, DialogTitleProps as DialogTitlePrimitiveProps } from "@headlessui/react";
import { FC, forwardRef } from "react";

export interface DialogTitleProps extends DialogTitlePrimitiveProps { }

export const DialogTitle: FC<DialogTitleProps> = forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>((props, ref) => {
  return (
    <DialogTitlePrimitive
      {...props}
      ref={ref}
    />
  );
});

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
