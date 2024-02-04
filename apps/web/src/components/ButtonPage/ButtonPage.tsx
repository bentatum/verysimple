"use client";

import { Button } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

const ButtonPage = () => {
  return (
    <ComponentPage
      pageTitle="Button"
      description="The button component is used to trigger an action."
      propsList={[
        {
          name: "variant",
          description: "The variant of the button.",
        },
        {
          name: "color",
          description: "The color of the button.",
        },
        {
          name: "size",
          description: "The size of the button.",
        },
        {
          name: "as",
          description: "The element type of the button.",
        },
        {
          name: "loading",
          description: "The loading state of the button.",
        },
      ]}
      InteractiveDemo={() => (
        <div>
        <div className="flex space-x-4 mb-8">
          <Button variant="text">Text</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className="flex space-x-4 mb-8">
          <Button variant="text" color="primary">Text</Button>
          <Button variant="filled" color="primary">Filled</Button>
          <Button variant="outlined" color="primary">Outlined</Button>
        </div>
        <div className="flex space-x-4 mb-8">
          <Button variant="text" color="destructive">Text</Button>
          <Button variant="filled" color="destructive">Filled</Button>
          <Button variant="outlined" color="destructive">Outlined</Button>
        </div>
        </div>
      )}
      codeSnippet={`<div className="flex space-x-4 mb-8">
  <Button variant="text">Text</Button>
  <Button variant="filled">Filled</Button>
  <Button variant="outlined">Outlined</Button>
</div>`}
    />
  );
};

export default ButtonPage;
