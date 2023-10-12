import classNames from "classnames";
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
        className={classNames(
          {
            "rounded-lg": !className.includes("rounded-"),
            "my-bg-secondary": !className.includes("bg-"),
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
