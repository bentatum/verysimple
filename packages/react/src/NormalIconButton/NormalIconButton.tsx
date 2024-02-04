import { forwardRef } from "react";
import classNames from "classnames";
import ButtonBase, { ButtonBaseProps } from "../ButtonBase";
import {
  iconButtonWidthClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";

export interface NormalIconButtonProps extends ButtonBaseProps {}

export const NormalIconButton = forwardRef<
  HTMLButtonElement,
  NormalIconButtonProps
>(({ className = "", size = "md", color, disabled, ...props }, ref) => {
  return (
    <ButtonBase
      {...props}
      ref={ref}
      size={size}
      color={color}
      disabled={disabled}
      className={classNames(
        iconButtonWidthClassNames(size),
        buttonShadowClassNames("normal", className),
        fieldBorderRadiusClassNames(className),
        fieldSizeClassNames(size),
        {
          "focus:bg-gray-300/20 hover:bg-gray-300/20 active:bg-gray-300/20":
            color !== "destructive" && !disabled,
          "dark:focus:bg-gray-750/60 dark:hover:bg-gray-750/60 dark:active:bg-gray-750/60":
            color !== "destructive" && !disabled,
          "focus:bg-red-500/20 hover:bg-red-500/20 active:bg-red-500/20":
            color === "destructive" && !disabled,
          "text-red-500 disabled:text-red-400": color === "destructive",
        },
        className
      )}
    />
  );
});

NormalIconButton.displayName = "NormalIconButton";

export default NormalIconButton;
