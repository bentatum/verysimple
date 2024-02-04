import { ButtonSize } from "@/types";
import { cva } from "class-variance-authority";

export const fieldSizeClassNames = (size: ButtonSize, className?: string) => {
  const hasOverride = /min-h-\[/.test(className || "");
  return cva(className, {
    variants: {
      size: hasOverride
        ? {}
        : {
            xs: "text-xs min-h-[32px]",
            sm: "text-sm min-h-[38px]",
            md: "text-base min-h-[44px]",
            lg: "text-xl min-h-[60px]",
          },
    }
  })({ size });
};