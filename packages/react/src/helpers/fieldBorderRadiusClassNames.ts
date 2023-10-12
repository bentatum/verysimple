import classNames from "classnames";

export const fieldBorderRadiusClassNames = (
  rounded: boolean | "full",
  className: string
) =>
  !className.match(/rounded/)
    ? classNames({
        "rounded-2xl": rounded === true,
        "rounded-full": rounded === "full",
      })
    : undefined;
