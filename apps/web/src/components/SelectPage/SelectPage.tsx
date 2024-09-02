"use client";

import { Select } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

export const InteractiveDemo = () => {
  return (
    <div>
      <Select className="w-48">
        <option>
          Test 1
        </option>
        <option>
          Test 2
        </option>
      </Select>
    </div>
  );
};

const SelectPage = () => {
  return (
    <ComponentPage
      pageTitle="Select"
      description="The select component is used to select an option from a list."
      propsList={[
        {
          name: "adornmentLeft",
          description: "ReactNode positioned to the left of the input.",
        },
        {
          name: "adornmentRight",
          description: "ReactNode positioned to the right of the input.",
        },
        {
          name: "error",
          description: "Boolean to indicate an error state.",
        },
        {
          name: "as",
          description: "ElementType to define the component used for the input.",
        },
        {
          name: "disabled",
          description: "Boolean to indicate if the input is disabled.",
        },
        {
          name: "inputSize",
          description: "InputSize to define the size of the input.",
        },
        {
          name: "containerProps",
          description: "InputContainerProps for the input container.",
        },
        {
          name: "readOnly",
          description: "Boolean to indicate if the input is read-only.",
        },
      ]}
      InteractiveDemo={InteractiveDemo}
      codeSnippet={`
        <Select>
          <option>
            Test 1
          </option>
          <option>
            Test 2
          </option>
        </Select>
      `}
    />
  );
};

export default SelectPage;