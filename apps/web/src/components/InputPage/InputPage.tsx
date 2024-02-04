"use client";

import { Input } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

export const InteractiveDemo = () => {
  return (
    <div>
      <Input
        placeholder="Type here..."
      />
    </div>
  );
};

const InputPage = () => {
  return (
    <ComponentPage
      pageTitle="Input"
      description="The input component is used to collect user input."
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
      codeSnippet={`<Input placeholder="Type here..." />`}
    />
  );
};

export default InputPage;
