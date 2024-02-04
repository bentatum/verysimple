import { Switch as SwitchPrimitive } from "@headlessui/react";
import { forwardRef } from "react";
import { ButtonBaseProps } from "../ButtonBase";
import clsx from "clsx";
import { cva } from "class-variance-authority";

export interface SwitchProps extends ButtonBaseProps {
  checked?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, children, className = "", ...props }, ref) => {
    return (
      <SwitchPrimitive
        {...props}
        ref={ref}
        className={clsx(
          {
            "bg-primary-500": checked,
            "my-bg-secondary": !checked && !className.includes("bg-"),
          },
          "p-1 relative inline-flex items-center w-12 h-7 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none",
          className
        )}
      >
        <span
          className={`${
            checked ? "translate-x-5" : "translate-x-0"
          } inline-block h-5 w-5 transform rounded-full my-bg-primary transition`}
        />
      </SwitchPrimitive>
    );
  }
);

export default Switch;
