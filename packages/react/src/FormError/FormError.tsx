import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef } from "react";

export interface FormErrorProps extends ComponentPropsWithRef<"div"> {}

export const FormError = forwardRef<HTMLDivElement, FormErrorProps>(
  (props, ref) => (
    <div
      {...props}
      ref={ref}
      role="alert"
      className={classNames(
        "mt-2 text-xs text-red-500 font-medium",
        props.className
      )}
    />
  )
);

FormError.displayName = "FormError";

export default FormError;
