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
      propsList={[
        {
          name: "placeholder",
          description: "The placeholder of the input.",
        },
        {
          name: "value",
          description: "The value of the input.",
        },
        {
          name: "onChange",
          description: "The function to call when the input value changes.",
        },
      ]}
      InteractiveDemo={InteractiveDemo}
      codeSnippet={`<Input placeholder="Type here..." />`}
    />
  );
};

export default InputPage;
