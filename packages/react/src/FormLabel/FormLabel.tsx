import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, FC, forwardRef } from "react";

export interface FormLabelProps extends ComponentPropsWithRef<"label"> {
  as?: ElementType;
}

export const FormLabel: FC<FormLabelProps> = forwardRef(
  ({ as = "label", className, ...props }, ref) => {
    const Component = as;
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(
          "block",
          {
            "text-sm": !className?.includes("text-"),
            "mb-1.5": !className?.includes("mb-"),
            "font-semibold": !className?.includes("font-"),
          },
          className
        )}
      />
    );
  }
);

FormLabel.displayName = "FormLabel";

export default FormLabel;
