import {
  gradientBorderStyles,
  GradientBorderStylesOptions,
} from "@/helpers/gradientBorderStyles";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

export type GradientBorderSize = 1 | 2 | 4 | 8;

export interface GradientBorderProps
  extends ComponentPropsWithRef<any>,
    GradientBorderStylesOptions {
  as?: ElementType;
  borderColor?: string;
}

export const GradientBorder = forwardRef<HTMLDivElement, GradientBorderProps>(
  (
    {
      as,
      style,
      borderSize,
      borderColor,
      backgroundColor,
      startColor,
      stopColor,
      direction,
      ...props
    },
    ref
  ) => {
    const Component = as || "div";
    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...gradientBorderStyles({
            backgroundColor,
            startColor: borderColor ?? startColor,
            stopColor: borderColor ?? stopColor,
            borderSize,
            direction,
          }),
          ...style,
        }}
      />
    );
  }
);

GradientBorder.displayName = "GradientBorder";

export default GradientBorder;
