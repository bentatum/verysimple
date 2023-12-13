import { ButtonSize } from "@/types";
import classNames from "classnames";

export const fieldSizeClassNames = (size: ButtonSize) =>
  classNames({
    "text-xs min-h-[32px]": size === "xs",
    "text-sm min-h-[38px]": size === "sm",
    "text-base min-h-[44px]": size === "md",
    "text-xl min-h-[60px]": size === "lg",
  });

