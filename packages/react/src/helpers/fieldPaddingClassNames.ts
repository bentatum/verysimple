import { ElementSize } from "@/types";
import classNames from "classnames";

export const fieldPaddingClassNames = (
  size: ElementSize,
  className: string = ""
) => {
  return !className.match(/px-/)
    ? classNames({
        "px-2": size === "xs",
        "px-3": size === "sm",
        "px-4": size === "md",
        "px-5": size === "lg",
      })
    : "";
};
