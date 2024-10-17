import clsx from "clsx";
import { forwardRef } from "react";
import type { ButtonColor } from "@/types";
import type { ButtonBaseProps } from "@/ButtonBase";
import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import OutlinedButtonBase from "@/OutlinedButtonBase";

export interface OutlinedButtonProps extends ButtonBaseProps {
  color?: ButtonColor;
}

export const OutlinedButton = forwardRef<
  HTMLButtonElement,
  OutlinedButtonProps
>(
  (
    {
      color = "neutral",
      disabled,
      size = "md",
      children,
      as = "button",
      ...props
    },
    ref
  ) => {
    return (
      <OutlinedButtonBase
        as={as}
        ref={ref}
        size={size}
        color={color}
        disabled={disabled}
        {...props}
      >
        {children}
      </OutlinedButtonBase>
    );
  }
);

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
