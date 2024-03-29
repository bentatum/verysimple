import { forwardRef } from "react";
import clsx from "clsx";
import { ButtonBaseProps } from "../ButtonBase";
import { ButtonColor } from "../types";
import { iconButtonWidthClassNames } from "@/helpers/iconButtonWidthClassNames";
import FilledButtonBase from "@/FilledButtonBase";

export interface FilledIconButtonProps extends ButtonBaseProps {
  color?: ButtonColor;
}

export const FilledIconButton = forwardRef<
  HTMLButtonElement,
  FilledIconButtonProps
>(({ className = "", size = "md", ...props }, ref) => {
  return (
    <FilledButtonBase
      {...props}
      ref={ref}
      size={size}
      className={clsx("rounded-full", iconButtonWidthClassNames(size), className)}
    />
  );
});

FilledIconButton.displayName = "FilledIconButton";

export default FilledIconButton;
