import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { fieldSizeClassNames } from "@/helpers/fieldSizeClassNames";
import { ChipSize } from "@/types";
import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef } from "react";

export interface ChipProps extends ComponentPropsWithRef<"div"> {
  size?: ChipSize;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "inline-flex items-center",
          fieldSizeClassNames(size),
          fieldPaddingClassNames(size, className),
          {
            "font-semibold": !className.includes("font-"),
            "my-bg-secondary": !className.includes("bg-"),
            "rounded-full": !className.includes("rounded-"),
            "text-black dark:text-white": !className.includes("text-"),
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
