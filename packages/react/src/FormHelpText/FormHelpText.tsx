import classNames from "classnames";
import { ComponentPropsWithRef, ElementType, FC, forwardRef } from "react";

export interface FormHelpTextProps extends ComponentPropsWithRef<"p"> {
  as?: ElementType<any>;
}

export const FormHelpText: FC<FormHelpTextProps> = forwardRef<
  HTMLParagraphElement,
  FormHelpTextProps
>(({ as, ...props }, ref) => {
  const Component = as || "p";
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames(
        "text-xs font-medium text-zinc-500 dark:text-zinc-300",
        {
          // italic: !props.className?.includes("not-italic"),
        },
        props.className
      )}
    />
  );
});

FormHelpText.displayName = "FormHelpText";

export default FormHelpText;
