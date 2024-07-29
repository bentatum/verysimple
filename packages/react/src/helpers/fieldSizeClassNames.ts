import { ButtonSize } from "@/types";

const sizeClasses = {
  xs: "text-xs min-h-[32px]",
  sm: "text-sm min-h-[38px]",
  md: "text-base min-h-[44px]",
  lg: "text-xl min-h-[60px]",
};

export const fieldSizeClassNames = (size: ButtonSize, className?: string) => {
  const hasOverride = /min-h-\[/.test(className || "");
  return hasOverride ? className : `${className || ""} ${sizeClasses[size] || ""}`.trim();
};