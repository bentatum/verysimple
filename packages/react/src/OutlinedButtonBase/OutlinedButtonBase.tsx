import classNames from "classnames";
import { FC, forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import { GradientBorderProps } from "@/GradientBorder";
import type { ButtonColor } from "@/types";
import {
  buttonShadowClassNames,
  buttonTextClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";
import { cva } from "class-variance-authority";

export interface OutlinedButtonBaseProps extends ButtonBaseProps {
  color?: ButtonColor;
}

export const OutlinedButtonBase: FC<OutlinedButtonBaseProps> = forwardRef<
  HTMLButtonElement,
  OutlinedButtonBaseProps
>(
  (
    {
      color = "neutral",
      className = "",
      disabled,
      size = "md",
      as = "button",
      GradientBorderProps,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        as={as}
        disabled={disabled}
        className={classNames(
          // this keeps the size consistent with inputs
          "box-content",
          "border",
          buttonShadowClassNames("outlined", className),
          buttonTextClassNames(className),
          fieldBorderRadiusClassNames(className),
          fieldSizeClassNames(size),
          cva([], {
            variants: {
              color: !className.match(/border/)
                ? {
                    neutral: "my-border",
                    primary: "border-primary-500 text-primary-500",
                    destructive: "border-red-500 disabled:border-red-400 text-red-500",
                  }
                : {},
            },
          })({ color }),
          className
        )}
      />
    );
  }
);

OutlinedButtonBase.displayName = "OutlinedButtonBase";

export default OutlinedButtonBase;
