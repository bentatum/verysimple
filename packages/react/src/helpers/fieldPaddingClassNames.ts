import { ElementSize } from "@/types";
import classNames from "classnames";

export const fieldPaddingClassNames = (
  size: ElementSize,
  className: string = ""
) => {
  return !className.match(/px-/)
    ? classNames({
        "px-3": size === "xs",
        "px-4": size === "sm",
        "px-5": size === "md",
        "px-6": size === "lg",
      })
    : "";
};
