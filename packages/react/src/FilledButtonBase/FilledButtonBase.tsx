import { forwardRef } from "react";
import clsx from "clsx";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import { ButtonColor } from "@/types";
import {
  buttonTextClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";
import { cva } from "class-variance-authority";

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
    const hasBgColor = className.includes("bg-");
    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        disabled={disabled}
        className={clsx(
          "transition-colors duration-200 ease-in-out",
          buttonTextClassNames(className),
          buttonShadowClassNames("filled", className),
          fieldSizeClassNames(size),
          fieldBorderRadiusClassNames(className),
          cva([], {
            variants: {
              color: {
                neutral: "my-bg-secondary",
                primary: "bg-primary-500 text-primaryoffset",
                destructive:
                  "bg-red-500 disabled:bg-red-400 disabled:text-white",
              },
            },
            defaultVariants: {
              color: "neutral",
            },
          })({ color }),
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
