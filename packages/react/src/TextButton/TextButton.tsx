import clsx from "clsx";
import { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import {
  buttonTextClassNames,
  fieldPaddingClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
} from "@/helpers";
import { ButtonColor } from "..";

export interface TextButtonProps extends ButtonBaseProps {
  color?: ButtonColor;
}

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    { className = "", size = "md", color = "neutral", children, ...props },
    ref
  ) => {
    const hasColorOverride = /text-/.test(className);

    const colors = {
      primary:
        "text-primary-500 hover:bg-primary-300 active:bg-primary-300 focus:bg-primary-300",
      neutral: "hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300",
      destructive:
        "text-red-500 hover:bg-red-300 active:bg-red-300 focus:bg-red-300",
    };

    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        color={color}
        className={clsx(
          "relative overflow-auto rounded",
          "transition-colors duration-200 ease-in-out",
          "hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20",
          buttonTextClassNames(className),
          fieldPaddingClassNames(size, className),
          buttonShadowClassNames("text", className),
          fieldSizeClassNames(size, className),
          !hasColorOverride && colors[color],
          className
        )}
      >
        {children}
      </ButtonBase>
    );
  }
);

TextButton.displayName = "TextButton";

export default TextButton;
