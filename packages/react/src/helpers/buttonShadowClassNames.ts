import clsx from "clsx";
import { shadowTransitionClassNames } from "./shadowTransitionClassNames";

export const buttonShadowClassNames = (
  variant: "filled" | "outlined" | "underlined" | "text" | "normal",
  className: string = ""
) =>
  className.match(/shadow/)
    ? ""
    : clsx(
        {
          "shadow-sm hover:shadow-md disabled:shadow-none":
            variant === "filled" ||
            variant === "outlined" ||
            variant === "normal",
        },
        shadowTransitionClassNames(className)
      );
