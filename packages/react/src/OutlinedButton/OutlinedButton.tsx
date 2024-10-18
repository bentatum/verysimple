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
      className,
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
        className={clsx(
          fieldPaddingClassNames(size),
          "flex items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </OutlinedButtonBase>
    );
  }
);

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
