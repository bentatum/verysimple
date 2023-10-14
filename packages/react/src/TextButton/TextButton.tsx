import classNames from "classnames";
import { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import {
  buttonTextClassNames,
  fieldPaddingClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
} from "@/helpers";

export interface TextButtonProps extends ButtonBaseProps {}

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ className = "", size = "md", color, children, ...props }, ref) => {
    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        color={color}
        className={classNames(
          "bg-clip-text my-bg-gradient-to-r hover:my-bg-gradient-to-r active:my-bg-gradient-to-r focus:my-bg-gradient-to-r",
          "transition-colors duration-200 ease-in-out",
          buttonTextClassNames(color, "text", className),
          fieldPaddingClassNames(size, className),
          buttonShadowClassNames("text", className),
          fieldSizeClassNames(size),
          {
            "text-transparent": color === "primary",
            "active:text-transparent focus:text-transparent hover:text-transparent":
              color !== "destructive",
          },
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
