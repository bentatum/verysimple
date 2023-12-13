import { ElementSize } from "@/types";
import classNames from "classnames";

export const fieldPaddingClassNames = (
  size: ElementSize,
  className: string = ""
) => {
  return !className.match(/px-/)
    ? classNames({
        "px-4": size === "xs",
        "px-5": size === "sm",
        "px-6": size === "md",
        "px-8": size === "lg",
      })
    : "";
};
