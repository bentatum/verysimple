import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { InputSize } from "@/types";
import classNames from "classnames";
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
        className={classNames(
          "absolute inset-y-0",
          "flex items-center",
          "font-medium whitespace-nowrap",
          fieldPaddingClassNames(inputSize, className),
          {
            "pointer-events-none": !className.match(/pointer-events-/),
            "text-zinc-500 dark:text-zinc-300": !className.match(/text-/),
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
