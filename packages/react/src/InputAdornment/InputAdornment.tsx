import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { InputSize } from "@/types";
import clsx from "clsx";
import { ComponentPropsWithRef, FC, ElementType, forwardRef } from "react";

export interface InputAdornmentProps extends ComponentPropsWithRef<"div"> {
  as?: ElementType;
  direction: "left" | "right";
  inputSize?: InputSize;
}

export const InputAdornment: FC<InputAdornmentProps> = forwardRef<
  HTMLDivElement,
  InputAdornmentProps
>(
  (
    { as, children, inputSize = "md", direction, className = "", ...props },
    ref
  ) => {
    const Component = as || "div";
    return (
      <Component
        ref={ref}
        className={clsx(
          "absolute inset-y-0",
          "flex",
          "font-medium whitespace-nowrap",
          fieldPaddingClassNames(inputSize, className),
          {
            "items-center": !className.match(/items-/),
            "pointer-events-none": !className.match(/pointer-events-/),
            "text-gray-500 dark:text-gray-300": !className.match(/text-/),
            "rounded-l-xl -left-px": direction === "left",
            "rounded-r-xl -right-px": direction === "right",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

InputAdornment.displayName = "InputAdornment";

export default InputAdornment;
