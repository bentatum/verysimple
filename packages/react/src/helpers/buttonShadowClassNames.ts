import classNames from "classnames";
import { shadowTransitionClassNames } from "./shadowTransitionClassNames";

export const buttonShadowClassNames = (
  variant: "filled" | "outlined" | "underlined" | "text" | "normal",
  className: string = ""
) =>
  className.match(/shadow/)
    ? ""
    : classNames(
        {
          "shadow-sm hover:shadow-md disabled:shadow-none":
            variant === "filled" ||
            variant === "outlined" ||
            variant === "normal",
        },
        shadowTransitionClassNames(className)
      );
