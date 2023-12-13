import classNames from "classnames";
import { forwardRef, useState } from "react";
import { ButtonBase, ButtonBaseProps } from "@/ButtonBase";
import {
  buttonTextClassNames,
  fieldPaddingClassNames,
  buttonShadowClassNames,
  fieldSizeClassNames,
  fieldBorderRadiusClassNames,
} from "@/helpers";

export interface TextButtonProps extends ButtonBaseProps {}

const rippleSize = 100;

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ className = "", size = "md", color, children, onClick, ...props }, ref) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [rippleKey, setRippleKey] = useState(0);

    const createRipple = (e: any) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - rippleSize / 2;
      const y = e.clientY - rect.top - rippleSize / 2;
      setCoords({ x, y });
      setRippleKey(Date.now()); // Update the ripple key
    };

    const handleClick = (e: any) => {
      if (onClick) {
        onClick(e);
      }
      createRipple(e);
    };

    return (
      <ButtonBase
        {...props}
        ref={ref}
        size={size}
        color={color}
        onClick={handleClick}
        className={classNames(
          "relative overflow-auto",
          "transition-colors duration-200 ease-in-out",
          "hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20",
          "hover:bg-zinc-300 active:bg-zinc-300 focus:bg-zinc-300",
          buttonTextClassNames(color, "text", className),
          fieldPaddingClassNames(size, className),
          buttonShadowClassNames("text", className),
          fieldSizeClassNames(size),
          fieldBorderRadiusClassNames(className),
          className
        )}
      >
        {children}
        {coords.x !== -1 && (
          <span
            key={rippleKey}
            className="absolute bg-zinc-200/50 rounded-full w-20 h-20 animate-ripple opacity-20"
            onAnimationEnd={() => setCoords({ x: -1, y: -1 })}
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        )}
      </ButtonBase>
    );
  }
);

TextButton.displayName = "TextButton";

export default TextButton;
