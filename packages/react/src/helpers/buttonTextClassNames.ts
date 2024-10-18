import clsx from "clsx";

export const buttonTextClassNames = (
  className: string = ""
) => {
  return clsx(
    {
      "whitespace-nowrap": !className.match(/whitespace-/),
      "font-medium": !className.match(
        /font-[thin|extralight|light|normal|medium|semibold|extrabold|black]/
      ),
    }
  );
};
