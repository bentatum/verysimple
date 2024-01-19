import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";

export interface BadgeProps extends ComponentPropsWithRef<"div"> {
  badgeContent?: ReactNode;
  badgePosition?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-left";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, badgeContent, badgePosition = "top-right", className = "" },
    ref
  ) => {
    if (!badgeContent) {
      return <>{children}</>;
    }
    const hasOverrides = className.match(
      /top-|right-|bottom-|left-|translate-/
    );
    return (
      <div ref={ref} className="relative">
        {children}
        {badgeContent && (
          <div
            className={classNames(
              "absolute z-10",
              !hasOverrides && {
                "top-0": badgePosition === "top",
                "right-0": badgePosition === "right",
                "bottom-0": badgePosition === "bottom",
                "left-0": badgePosition === "left",
                "left-1/2": ["top", "bottom"].includes(badgePosition),
                "top-1/2": ["left", "right"].includes(badgePosition),
                "translate-x-1/2": [
                  "right",
                  "top-right",
                  "bottom-right",
                ].includes(badgePosition),
                "-translate-x-1/2": [
                  "bottom",
                  "top",
                  "left",
                  "top-left",
                  "bottom-left",
                ].includes(badgePosition),
                "translate-y-1/2": [
                  "bottom",
                  "bottom-left",
                  "bottom-right",
                ].includes(badgePosition),
                "-translate-y-1/2": [
                  "top",
                  "top-left",
                  "top-right",
                  "right",
                  "left",
                ].includes(badgePosition),
                "top-0 right-0": badgePosition === "top-right",
                "top-0 left-0": badgePosition === "top-left",
                "bottom-0 right-0": badgePosition === "bottom-right",
                "bottom-0 left-0": badgePosition === "bottom-left",
              },
              className
            )}
          >
            {badgeContent}
          </div>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
