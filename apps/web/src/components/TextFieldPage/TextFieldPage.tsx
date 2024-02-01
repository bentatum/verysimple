"use client";

import { TextField } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

export const InteractiveDemo = () => {
  return (
    <div>
      <TextField error="Oh no..." id="ok" label="Hello" placeholder="Type here..." />
    </div>
  );
};

const TextFieldPage = () => {
  return (
    <ComponentPage
      pageTitle="TextField"
      description="The TextField component is used whenever you need an input with a label, error, and help text."
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
      codeSnippet={`<TextField error="Oh no..." id="ok" label="Hello" placeholder="Type here..." />`}
    />
  );
};

export default TextFieldPage;
