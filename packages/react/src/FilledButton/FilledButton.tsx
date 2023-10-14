import { forwardRef } from "react";
import classNames from "classnames";
import type { ButtonBaseProps } from "@/ButtonBase";
import type { ButtonColor } from "@/types";
import { fieldPaddingClassNames } from "@/helpers/fieldPaddingClassNames";
import FilledButtonBase from "@/FilledButtonBase";

export interface FilledButtonProps extends ButtonBaseProps {
  color?: ButtonColor;
}

export const FilledButton = forwardRef<HTMLButtonElement, FilledButtonProps>(
  ({ className, color, size = "md", ...props }, ref) => {
    return (
      <FilledButtonBase
        {...props}
        ref={ref}
        size={size}
        color={color}
        className={classNames(
          fieldPaddingClassNames(size, className),
          { "text-white": color === "destructive" },
          className
        )}
      />
    );
  }
);

FilledButton.displayName = "FilledButton";

export default FilledButton;
