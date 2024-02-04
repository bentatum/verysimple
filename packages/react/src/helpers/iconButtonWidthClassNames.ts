import { ButtonSize } from "@/types";
import clsx from "clsx";

export const iconButtonWidthClassNames = (size: ButtonSize) =>
  clsx({
    "min-w-[32px]": size === "xs",
    "min-w-[38px]": size === "sm",
    "min-w-[48px]": size === "md",
    "min-w-[60px]": size === "lg",
  });
