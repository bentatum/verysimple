import classNames from "classnames";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  FocusEvent,
  forwardRef,
  ReactNode,
  useState,
} from "react";
import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import { shadowTransitionClassNames } from "@/helpers/shadowTransitionClassNames";
import {
  gradientBorderStyles,
  GradientBorderStylesOptions,
} from "@/helpers/gradientBorderStyles";
import { InputSize } from "@/types";
import { fieldSizeClassNames } from "@/helpers/fieldSizeClassNames";

export interface InputContainerClassnameFunctionProps {
  hasFocus: boolean;
}

export interface InputContainerProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className"> {
  className?:
    | string
    | (({ hasFocus }: InputContainerClassnameFunctionProps) => string);
}

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
  rounded?: boolean;
  disableFocusStyle?: boolean;
  forceFocusStyle?: boolean;
  gradientBorderStylesOptions?: GradientBorderStylesOptions;
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
      rounded,
      readOnly,
      containerProps,
      disabled,
      onFocus,
      onBlur,
      style,
      disableFocusStyle,
      forceFocusStyle,
      gradientBorderStylesOptions = {
        borderSize: 1,
      },
      ...props
    },
    ref
  ) => {
    const InputComponent = as;
    const [hasFocus, setHasFocus] = useState(false);
    const containerClassname =
      (typeof containerProps?.className === "string"
        ? containerProps?.className
        : containerProps?.className?.({ hasFocus })) || "";
    return (
      <div
        {...containerProps}
        className={classNames(
          "inline-flex items-center overflow-hidden",
          {
            rounded,
            "border my-border-primary":
              !hasFocus && !containerClassname.includes("border-"),
            "w-full": fullWidth,
            [shadowTransitionClassNames(className)]: !disabled,
            "shadow-sm focus-within:shadow-md hover:shadow-md disabled:shadow-none":
              !disabled,
          },
          containerClassname
        )}
        style={
          forceFocusStyle || (hasFocus && !disableFocusStyle)
            ? {
                ...gradientBorderStyles({
                  backgroundColor: "var(--my-bg-primary)",
                  ...gradientBorderStylesOptions,
                }),
                ...style,
              }
            : style
        }
      >
        {/* 
          without the container below, absolutely positioned elements
          inside tend to move slightly when input goes in and out of focus
        */}
        <div className="w-full relative inline-flex items-center">
          <InputComponent
            ref={ref}
            disabled={disabled}
            onFocus={(event: FocusEvent<HTMLInputElement, Element>) => {
              if (forceFocusStyle || !disableFocusStyle) {
                setHasFocus(true);
              }
              if (onFocus) {
                onFocus(event);
              }
            }}
            onBlur={(event: FocusEvent<HTMLInputElement, Element>) => {
              if (!forceFocusStyle && !disableFocusStyle) {
                setHasFocus(false);
              }
              if (onBlur) {
                onBlur(event);
              }
            }}
            className={classNames(
              fieldSizeClassNames(inputSize),
              fieldPaddingClassNames(inputSize, className),
              "focus:outline-none appearance-none",
              "placeholder-zinc-400",
              "disabled:bg-zinc-200 dark:disabled:bg-zinc-600 disabled:cursor-not-allowed",
              {
                rounded,
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
