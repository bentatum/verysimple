import { ButtonColor } from "@/types";
import { cva } from "class-variance-authority";
import clsx from "clsx";
// import { ButtonVariant } from "..";

export const buttonTextClassNames = (
  className: string = ""
) => {
  return clsx(
    {
      "whitespace-nowrap": !className.match(/whitespace-/),
      "font-bold": !className.match(
        /font-[thin|extralight|light|normal|medium|semibold|extrabold|black]/
      ),
    }
  );
};
clsx();
