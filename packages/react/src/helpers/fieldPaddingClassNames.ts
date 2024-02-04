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
            xs: "px-2",
            sm: "px-3",
            md: "px-4",
            lg: "px-5",
          },
    },
  })({ size });
};
