import { ElementSize } from "@/types";
import { cva } from "class-variance-authority";

export const fieldPaddingClassNames = (
  size: ElementSize,
  className: string = ""
) => {
  const hasOverride = /px-/.test(className);
  return cva(className, {
    variants: {
      size: hasOverride
        ? {}
        : {
            xs: "px-3",
            sm: "px-4",
            md: "px-5",
            lg: "px-6",
          },
    },
  })({ size });
};
