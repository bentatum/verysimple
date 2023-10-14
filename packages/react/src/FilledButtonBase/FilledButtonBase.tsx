import { forwardRef } from "react";
import classNames from "classnames";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import { ButtonColor } from "@/types";
import {
  buttonTextClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";

export interface FilledButtonBaseProps extends ButtonBaseProps {
  color?: ButtonColor;
  rounded?: boolean | "full";
}

export const FilledButtonBase = forwardRef<
  HTMLButtonElement,
  FilledButtonBaseProps
>(
  (
    {
      color = "neutral",
      className = "",
      disabled,
      size = "md",
      children,
      rounded = "full",
      ...props
    },
    ref
  ) => {
    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        disabled={disabled}
        className={classNames(
          "transition-colors duration-200 ease-in-out",
          buttonTextClassNames(color, "filled", className),
          buttonShadowClassNames("filled", className),
          fieldSizeClassNames(size),
          fieldBorderRadiusClassNames(rounded, className),
          {
            "my-bg-secondary hover:text-white focus:text-white active:text-white":
              color === "neutral",
            "hover:my-bg-gradient-to-r focus:my-bg-gradient-to-r":
              !disabled && ["neutral", "primary"].includes(color),
            "my-bg-gradient-to-r text-white": color === "primary" && !disabled,
            "bg-red-500 disabled:bg-red-400 disabled:text-white":
              color === "destructive",
            "disabled:bg-zinc-300 dark:disabled:bg-zinc-900":
              color !== "destructive",
          },
          className
        )}
      >
        {children}
      </ButtonBase>
    );
  }
);

FilledButtonBase.displayName = "FilledButtonBase";

export default FilledButtonBase;
