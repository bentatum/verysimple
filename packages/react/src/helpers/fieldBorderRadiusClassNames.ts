import classNames from "classnames";

export const fieldBorderRadiusClassNames = (className: string) =>
  classNames({
    "rounded-2xl": !className.match(/rounded/),
  });
