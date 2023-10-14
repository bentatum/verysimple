import classNames from "classnames";
import { FC, forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import { GradientBorder, GradientBorderProps } from "@/GradientBorder";
import type { ButtonColor } from "@/types";
import {
  buttonShadowClassNames,
  buttonTextClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";

export interface OutlinedButtonBaseProps extends ButtonBaseProps {
  color?: ButtonColor;
  GradientBorderProps?: GradientBorderProps;
  rounded?: boolean | "full";
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
      rounded = "full",
      GradientBorderProps,
      ...props
    },
    ref
  ) => {
    const GradientBorderButton = forwardRef<any, GradientBorderProps>(
      (props, ref) => {
        return (
          <GradientBorder
            {...props}
            as={as}
            ref={ref}
            borderColor={disabled ? "var(--my-border-disabled)" : undefined}
            {...GradientBorderProps}
          />
        );
      }
    );

    const Component = color !== "primary" ? as : GradientBorderButton;
    const gradientBorderEligible =
      color !== "destructive" &&
      !disabled &&
      !className.match(/hover:text-|focus:text-/);

    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        as={Component}
        disabled={disabled}
        className={classNames(
          // this keeps the size consistent with inputs
          'box-content',
          buttonShadowClassNames("outlined", className),
          buttonTextClassNames(color, "outlined", className),
          fieldBorderRadiusClassNames(rounded, className),
          fieldSizeClassNames(size),
          {
            border: color !== "primary",
            "my-border-primary": color === "neutral",
            "border-red-500 disabled:border-red-400": color === "destructive",
            "hover:my-bg-gradient-dark-to-r hover:border-none hover:p-[1px] hover:text-white":
              gradientBorderEligible,
            "focus:my-bg-gradient-dark-to-r focus:border-none focus:p-[1px] focus:text-white":
              gradientBorderEligible,
          },
          className
        )}
      />
    );
  }
);

OutlinedButtonBase.displayName = "OutlinedButtonBase";

export default OutlinedButtonBase;
