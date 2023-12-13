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
          fieldBorderRadiusClassNames(className),
          {
            ...(!className.includes("bg-") && {
              "my-bg-secondary": color === "neutral",
              "bg-primary-500 text-primaryoffset": color === "primary",
              "bg-red-500 disabled:bg-red-400 disabled:text-white":
                color === "destructive",
              "disabled:bg-zinc-300 dark:disabled:bg-zinc-900":
                color !== "destructive",
            }),
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
