import { ElementSize } from "@/types";

const sizeClasses = {
  xs: "px-2.5",
  sm: "px-3",
  md: "px-4",
  lg: "px-5",
};

export const fieldPaddingClassNames = (
  size: ElementSize,
  className: string = ""
) => {
  const hasOverride = /px-/.test(className);
  return hasOverride ? className : `${className} ${sizeClasses[size] || ""}`.trim();
};
