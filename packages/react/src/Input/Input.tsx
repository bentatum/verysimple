import clsx from "clsx";
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
import { fieldBorderRadiusClassNames } from "@/helpers/fieldBorderRadiusClassNames";

export interface InputContainerProps extends ComponentPropsWithoutRef<"div"> {}

export interface InputProps extends ComponentPropsWithRef<"input"> {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
  error?: boolean;
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
    const fullWidth = className.includes("w-full");
    return (
      <div
        {...containerProps}
        className={clsx(
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
            className={clsx(
              fieldSizeClassNames(inputSize),
              fieldPaddingClassNames(inputSize, className),
              "focus:outline-none appearance-none",
              "placeholder-gray-400",
              "disabled:bg-gray-200 dark:disabled:bg-gray-600 disabled:cursor-not-allowed",
              {
                "cursor-default": readOnly,
                "my-bg-primary": !className.match(/bg-/),
                "text-left dark:text-white dark:disabled:text-gray-300 text-black":
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
