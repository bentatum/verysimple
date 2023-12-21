import classNames from "classnames";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { shadowTransitionClassNames } from "@/helpers/shadowTransitionClassNames";
import { InputSize } from "@/types";
import { fieldSizeClassNames } from "@/helpers/fieldSizeClassNames";
import { fieldBorderRadiusClassNames } from "..";

export interface InputContainerClassnameFunctionProps {
  hasFocus: boolean;
}

export interface InputContainerProps extends ComponentPropsWithoutRef<"div"> {}

export interface InputProps extends ComponentPropsWithRef<"input"> {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  as?: ElementType;
  disabled?: boolean;
  inputSize?: InputSize;
  containerProps?: InputContainerProps;
  readOnly?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      adornmentLeft,
      adornmentRight,
      children,
      className = "",
      error,
      fullWidth,
      as = "input",
      inputSize = "md",
      readOnly,
      containerProps,
      disabled,
      ...props
    },
    ref
  ) => {
    const InputComponent = as;
    const containerClassname = containerProps?.className || "";
    return (
      <div
        {...containerProps}
        className={classNames(
          "inline-flex items-center overflow-hidden",
          fieldBorderRadiusClassNames(containerClassname),
          {
            "border my-border": !containerClassname.includes("border-"),
            "w-full": fullWidth,
            [shadowTransitionClassNames(className)]: !disabled,
            "shadow-sm focus-within:shadow-md hover:shadow-md disabled:shadow-none":
              !disabled,
          },
          containerClassname
        )}
      >
        <div className="w-full relative inline-flex items-center">
          <InputComponent
            ref={ref}
            disabled={disabled}
            className={classNames(
              fieldSizeClassNames(inputSize),
              fieldPaddingClassNames(inputSize, className),
              "focus:outline-none appearance-none",
              "placeholder-zinc-400",
              "disabled:bg-zinc-200 dark:disabled:bg-zinc-600 disabled:cursor-not-allowed",
              {
                "w-full": fullWidth,
                "cursor-default": readOnly,
                "my-bg-primary": !className.match(/bg-/),
                "text-left dark:text-white dark:disabled:text-zinc-300 text-black":
                  !className.match(/text-/),
              },
              className
            )}
            {...props}
          >
            {children}
          </InputComponent>
          {adornmentLeft}
          {adornmentRight}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
