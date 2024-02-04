import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import Spinner from "../Spinner";
import { ButtonSize } from "../types";

export interface ButtonBaseProps extends ComponentPropsWithRef<any> {
  as?: ElementType;
  loading?: boolean;
  size?: ButtonSize;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      as,
      size = "md",
      loading,
      className = "",
      children,
      role,
      tabIndex = 0,
      ...props
    },
    ref
  ) => {
    const Component = as || "button";
    return (
      <Component
        {...props}
        role={role ?? (Component !== "button" ? "button" : undefined)}
        ref={ref}
        tabIndex={tabIndex}
        className={clsx(
          "focus:outline-none",
          {
            "pointer-events-none cursor-wait": loading,
            "cursor-pointer disabled:cursor-not-allowed": !className.match(
              /cursor-|disabled:cursor-/
            ),
            "inline-flex items-center justify-center": !className.match(
              /block|^flex$|items-|justify-/
            ),
          },
          className
        )}
      >
        {loading ? <Spinner /> : children}
      </Component>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
