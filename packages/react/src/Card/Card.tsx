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
    console.log("card", className);
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(
          {
            "rounded-lg": !className.match(/rounded/gi),
            "my-bg-secondary": !className.match(/bg-/gi),
            "shadow": !className.match(/shadow-/gi),
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
