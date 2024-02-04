import classNames from "classnames";
import { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import {
  buttonTextClassNames,
  fieldPaddingClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";
import Ripple from "@/Ripple";
import { cva } from "class-variance-authority";

export interface TextButtonProps extends ButtonBaseProps {}

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    { className = "", size = "md", color, children, onClick, ...props },
    ref
  ) => {
    const handleClick = (e: any) => {
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Ripple >
        <ButtonBase
          {...props}
          size={size}
          ref={ref}
          color={color}
          onClick={handleClick}
          className={classNames(
            "relative overflow-auto",
            "transition-colors duration-200 ease-in-out",
            "hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20",
            "",
            buttonTextClassNames(className),
            fieldPaddingClassNames(size, className),
            buttonShadowClassNames("text", className),
            fieldSizeClassNames(size, className),
            fieldBorderRadiusClassNames(className),
            cva([], {
              variants: {
                color: !/text-/.test(className)
                  ? {
                      primary: "text-primary-500 hover:bg-primary-300 active:bg-primary-300 focus:bg-primary-300",
                      neutral: "hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300",
                      destructive: "text-red-500 hover:bg-red-300 active:bg-red-300 focus:bg-red-300",
                    }
                  : {},
              },
            })({ color }),
            className
          )}
        >
          {children}
        </ButtonBase>
      </Ripple>
    );
  }
);

TextButton.displayName = "TextButton";

export default TextButton;
