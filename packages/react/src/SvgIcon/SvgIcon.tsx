import { ComponentPropsWithRef, forwardRef } from "react";
import classNames from "classnames";

export interface SvgIconProps extends ComponentPropsWithRef<"svg"> {}

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={classNames(
          "shrink-0",
          {
            "fill-current": !className?.includes("fill-"),
            "h-4": !className?.includes("h-"),
            "w-4": !className?.includes("w-"),
          },
          className
        )}
        {...props}
      />
    );
  }
);

SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
