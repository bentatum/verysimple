import clsx from "clsx";

export const fieldBorderRadiusClassNames = (className: string) =>
  clsx({
    "rounded-2xl": !className.match(/rounded/),
  });
