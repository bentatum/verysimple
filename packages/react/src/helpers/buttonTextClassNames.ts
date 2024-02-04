import { ButtonColor } from "@/types";
import { cva } from "class-variance-authority";
import classNames from "classnames";
// import { ButtonVariant } from "..";

export const buttonTextClassNames = (
  className: string = ""
) => {
  return classNames(
    {
      "whitespace-nowrap": !className.match(/whitespace-/),
      "font-bold": !className.match(
        /font-[thin|extralight|light|normal|medium|semibold|extrabold|black]/
      ),
    }
  );
};
classNames();
