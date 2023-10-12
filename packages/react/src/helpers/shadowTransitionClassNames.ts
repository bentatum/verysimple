import classNames from "classnames";

export const shadowTransitionClassNames = (className: string = "") =>
  classNames({
    "transition-shadow ease-in duration-100": !className.match(/transition/),
  });
