import Input, { InputProps } from "../Input";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  FC,
  forwardRef,
  ReactNode,
} from "react";
import FormError, { FormErrorProps } from "../FormError";
import FormLabel, { FormLabelProps } from "../FormLabel";
import FormHelpText, { FormHelpTextProps } from "../FormHelpText";
import classNames from "classnames";
import Textarea from "../Textarea";

export interface TextFieldProps extends ComponentPropsWithRef<any> {
  id: string;
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
  as?: ElementType;
  containerProps?: ComponentPropsWithoutRef<"div">;
  inputContainerProps?: ComponentPropsWithoutRef<"div">;
  error?: string;
  fullWidth?: boolean;
  helpText?: ReactNode;
  helpTextProps?: FormHelpTextProps;
  InputProps?: InputProps;
  label?: ReactNode;
  labelPosition?: "left" | "right" | "default";
  labelProps?: FormLabelProps;
  errorProps?: FormErrorProps;
  FormErrorProps?: FormErrorProps;
  FormLabelProps?: FormLabelProps;
  size?: "sm" | "md" | "lg";
  multiline?: boolean;
}

export const TextField: FC<TextFieldProps> = forwardRef(
  (
    {
      label,
      labelProps,
      id,
      as = Input,
      containerProps,
      inputContainerProps,
      type = "text",
      name,
      error,
      fullWidth,
      helpText,
      InputProps,
      labelPosition = "default",
      errorProps,
      FormErrorProps,
      FormLabelProps,
      size = "md",
      helpTextProps,
      multiline,
      ...props
    },
    ref
  ) => {
    const Component = multiline ? Textarea : as;
    const inlineVariant = labelPosition !== "default";
    return (
      <div
        className={classNames(
          "inline-block text-left",
          {
            "w-full": fullWidth,
            "flex items-center": inlineVariant,
            "flex-row-reverse justify-end": labelPosition === "right",
          },
          containerProps?.className
        )}
      >
        {label && (
          <FormLabel
            htmlFor={id}
            {...labelProps}
            {...FormLabelProps}
            className={classNames(
              {
                "mb-0 whitespace-nowrap": inlineVariant,
                "mr-3": labelPosition === "left",
                "ml-3": labelPosition === "right",
              },
              labelProps?.className,
              FormLabelProps?.className
            )}
          >
            {label}
            {helpText && inlineVariant && (
              <FormHelpText {...helpTextProps}>{helpText}</FormHelpText>
            )}
          </FormLabel>
        )}
        <Component
          ref={ref}
          type={type}
          name={name || id}
          id={id}
          fullWidth={fullWidth}
          inputSize={size}
          containerProps={inputContainerProps}
          {...props}
          {...InputProps}
        />
        {helpText && !inlineVariant && (
          <FormHelpText
            className={classNames({
              "mt-1": true,
            })}
            {...helpTextProps}
          >
            {helpText}
          </FormHelpText>
        )}
        {error && (
          <FormError
            {...errorProps}
            {...FormErrorProps}
            className={classNames(
              {
                "mt-0 ml-5": labelPosition === "left",
              },
              errorProps?.className,
              FormErrorProps?.className
            )}
          >
            {error}
          </FormError>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
