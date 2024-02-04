import clsx from "clsx";

export const shadowTransitionClassNames = (className: string = "") =>
  clsx({
    "transition-shadow ease-in duration-100": !className.match(/transition/),
  });
