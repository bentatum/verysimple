import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { fieldSizeClassNames } from "@/helpers/fieldSizeClassNames";
import { ChipSize } from "@/types";
import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

export interface ChipProps extends ComponentPropsWithRef<"div"> {
  size?: ChipSize;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "inline-flex items-center",
          fieldSizeClassNames(size),
          fieldPaddingClassNames(size, className),
          {
            "font-semibold": !className.includes("font-"),
            "bg-foreground": !className.includes("bg-"),
            "rounded-full": !className.includes("rounded-")
          },
          className
        )}
        {...props}
      />
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
