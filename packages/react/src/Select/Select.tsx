import Input, { InputProps } from "@/Input";
import InputAdornment from "@/InputAdornment";
import { ElementSize } from "@/types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";

export interface SelectProps extends InputProps { }

const iconSizes: Record<ElementSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ inputSize = "md", ...props }, ref) => {
  return (
    <Input
      ref={ref as any}
      inputSize={inputSize}
      adornmentRight={
        <InputAdornment direction="right">
          <ChevronDownIcon className={iconSizes[inputSize]} />
        </InputAdornment>
      }
      {...props}
      as="select"
    />
  );
});

export default Select;
