import { ElementType, forwardRef } from "react";
import { OutlinedButton, OutlinedButtonProps } from "../OutlinedButton";
import { FilledButton, FilledButtonProps } from "../FilledButton";
import { TextButton, TextButtonProps } from "../TextButton";

export type ButtonVariant = "text" | "filled" | "outlined";

export interface ButtonProps
  extends TextButtonProps,
    FilledButtonProps,
    OutlinedButtonProps {
  variant?: ButtonVariant;
}

const componentTypeMap = new Map<ButtonVariant, ElementType>([
  ["text", TextButton],
  ["filled", FilledButton],
  ["outlined", OutlinedButton],
]);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    const Component = componentTypeMap.get(variant!) ?? FilledButton;
    return <Component ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
