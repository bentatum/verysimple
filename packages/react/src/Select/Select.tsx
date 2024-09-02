import Input, { InputProps } from "@/Input";
import InputAdornment from "@/InputAdornment";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

export interface SelectProps extends InputProps { }

export const Select: FC<SelectProps> = (props) => {
  return (
    <Input
      adornmentRight={
        <InputAdornment direction="right">
          <ChevronDownIcon className="w-5 h-5" />
        </InputAdornment>
      }
      {...props}
      as="select"
    />
  );
};

export default Select;
