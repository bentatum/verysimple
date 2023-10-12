import classNames from "classnames";
import { forwardRef } from "react";
import type { ButtonBaseProps } from "@/ButtonBase";
import { OutlinedButtonBase } from "@/OutlinedButtonBase";
import { iconButtonWidthClassNames } from "@/helpers/iconButtonWidthClassNames";

export interface OutlinedIconButtonProps extends ButtonBaseProps {}

export const OutlinedIconButton = forwardRef<
  HTMLButtonElement,
  OutlinedIconButtonProps
>(({ className, size = "md", color, ...props }, ref) => {
  return (
    <OutlinedButtonBase
      {...props}
      ref={ref}
      size={size}
      color={color}
      className={classNames(
        iconButtonWidthClassNames(size),
        {
          "hover:text-inherit": color === "primary",
        },
        className
      )}
    />
  );
});

OutlinedIconButton.displayName = "OutlinedIconButton";

export default OutlinedIconButton;
