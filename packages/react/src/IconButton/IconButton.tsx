import { ElementType, forwardRef } from "react";
import {
  OutlinedIconButton,
  OutlinedIconButtonProps,
} from "@/OutlinedIconButton";
import { FilledIconButton, FilledIconButtonProps } from "@/FilledIconButton";
import { NormalIconButton } from "@/NormalIconButton";

export type IconButtonVariant = "normal" | "filled" | "outlined";

export interface IconButtonProps
  extends FilledIconButtonProps,
    OutlinedIconButtonProps {
  variant?: IconButtonVariant;
}

const componentTypeMap = new Map<IconButtonVariant, ElementType>([
  ["normal", NormalIconButton],
  ["filled", FilledIconButton],
  ["outlined", OutlinedIconButton],
]);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, ...props }, ref) => {
    const Component = componentTypeMap.get(variant!) ?? NormalIconButton;
    return <Component ref={ref} {...props} />;
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
