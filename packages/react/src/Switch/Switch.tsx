import { Switch as SwitchPrimitive } from "@headlessui/react";
import { forwardRef } from "react";
import { ButtonBaseProps } from "../ButtonBase";
import classNames from "classnames";

export interface SwitchProps extends ButtonBaseProps {
  checked?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, children, ...props }, ref) => {
    return (
      <SwitchPrimitive
        {...props}
        ref={ref}
        className={classNames(
          {
            "bg-green-500": checked,
            "my-bg-primary": !checked && !props.className?.includes("bg-"),
          },
          "relative inline-flex flex-shrink-0 w-10 h-6 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
          props.className
        )}
      >
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </SwitchPrimitive>
    );
  }
);

export default Switch;
