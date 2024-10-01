import { fieldBorderRadiusClassNames } from "@/helpers";
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
            "bg-foreground": !className.match(/bg-/gi),
            "shadow": !className.match(/shadow-/gi),
            "rounded": !className.match(/rounded/gi),
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
