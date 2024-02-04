import clsx from "clsx";
import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
} from "react";

export interface CardProps
  extends PropsWithChildren,
    ComponentPropsWithRef<"div"> {
  as?: ElementType;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ as = "div", children, className = "", ...props }, ref) => {
    const Component = as;
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(
          {
            "rounded-lg": !className.includes("rounded-"),
            "my-bg-primary": !className.includes("bg-"),
            "shadow": !className.includes("shadow-"),
          },
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

export default Card;
