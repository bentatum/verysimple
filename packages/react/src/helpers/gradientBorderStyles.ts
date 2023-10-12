// import { GradientBorderSize } from "../GradientBorder";

export interface GradientBorderStylesOptions {
  borderSize?: any;
  backgroundColor?: string;
  direction?: "top" | "right" | "bottom" | "left";
  startColor?: string;
  stopColor?: string;
}

export const gradientBorderStyles = ({
  borderSize = 1,
  backgroundColor: bg = "var(--st-bg-primary)",
  direction: dir = "right",
  startColor = "var(--st-gradient-start)",
  stopColor = "var(--st-gradient-stop)",
}: GradientBorderStylesOptions = {}) => ({
  background: `linear-gradient(${bg}, ${bg}) 0 0 / 100% 100% no-repeat, linear-gradient(to ${dir}, ${startColor} 0%, ${stopColor} 100%)`,
  backgroundClip: "content-box, border-box",
  padding: borderSize,
});
