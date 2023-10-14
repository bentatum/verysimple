import classNames from "classnames";
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
        <span
          className={classNames(
            fieldPaddingClassNames(size),
            "w-full flex items-center justify-center",
            {
              "text-transparent bg-clip-text my-bg-gradient-to-r":
                color === "primary" && !disabled,
            }
          )}
        >
          {children}
        </span>
      </OutlinedButtonBase>
    );
  }
);

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
