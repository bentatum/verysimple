import { forwardRef } from "react";
import classNames from "classnames";
import ButtonBase, { ButtonBaseProps } from "../ButtonBase";
import {
  iconButtonWidthClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
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
        fieldSizeClassNames(size),
        {
          "rounded-full": !className.match(/rounded/),
          "focus:bg-zinc-300/20 hover:bg-zinc-300/20 active:bg-zinc-300/20":
            color !== "destructive" && !disabled,
          "dark:focus:bg-zinc-750/60 dark:hover:bg-zinc-750/60 dark:active:bg-zinc-750/60":
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
