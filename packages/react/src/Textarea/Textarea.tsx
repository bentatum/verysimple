import classNames from "classnames";
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
        className={classNames("block p-2", props.className)}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
