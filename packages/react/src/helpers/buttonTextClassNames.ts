import { ButtonColor } from "@/types";
import classNames from "classnames";
// import { ButtonVariant } from "..";

export const buttonTextClassNames = (
  color: ButtonColor,
  variant: any,
  className: string = ""
) =>
  classNames({
    "text-red-500": color === "destructive" && !className.match(/text-/),
    "disabled:text-zinc-400 dark:disabled:text-zinc-500":
      color !== "destructive",
    "disabled:text-red-400":
      color === "destructive" &&
      variant !== "filled" &&
      !className.match(/disabled:text-/),
    "dark:disabled:text-zinc-800":
      color === "destructive" &&
      variant === "filled" &&
      !className.match(/disabled:text-/),
    uppercase: !className.match(/lowercase|capitalize|normal-case/),
    "tracking-widest": !className.match(/tracking-/),
    "whitespace-nowrap": !className.match(/whitespace-/),
    "font-bold": !className.match(
      /font-[thin|extralight|light|normal|medium|semibold|extrabold|black]/
    ),
  });
