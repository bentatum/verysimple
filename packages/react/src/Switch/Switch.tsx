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
          "relative inline-flex items-center flex-shrink-0 w-11 h-6 my-border border rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none",
          props.className
        )}
      >
        <span
          className={`${
            checked ? "translate-x-5" : "translate-x-0"
          } inline-block h-5 w-5 transform rounded-full my-bg-secondary transition`}
        />
      </SwitchPrimitive>
    );
  }
);

export default Switch;
