import clsx from "clsx";
import { FC, forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import type { ButtonColor } from "@/types";
import {
  buttonShadowClassNames,
  buttonTextClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";

export interface OutlinedButtonBaseProps extends ButtonBaseProps {
  color?: ButtonColor;
}

const colorClasses = {
  neutral: "my-border",
  primary: "border-primary-500 text-primary-500",
  destructive: "border-red-500 disabled:border-red-400 text-red-500",
};

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
    const hasBorderColor = className.includes("border-");
    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        as={as}
        disabled={disabled}
        className={clsx(
          // this keeps the size consistent with inputs
          "box-content",
          "border",
          buttonShadowClassNames("outlined", className),
          buttonTextClassNames(className),
          fieldBorderRadiusClassNames(className),
          fieldSizeClassNames(size),
          !hasBorderColor && colorClasses[color],
          className
        )}
      />
    );
  }
);

OutlinedButtonBase.displayName = "OutlinedButtonBase";

export default OutlinedButtonBase;
