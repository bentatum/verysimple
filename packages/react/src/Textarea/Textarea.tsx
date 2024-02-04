import clsx from "clsx";
import { forwardRef } from "react";
import Input, { InputProps } from "../Input";

export interface TextareaProps extends InputProps {}

export const Textarea = forwardRef<HTMLInputElement, TextareaProps>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
        as="textarea"
        className={clsx("block p-2", props.className)}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
