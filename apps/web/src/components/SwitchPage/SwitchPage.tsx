"use client";

import { Switch } from "@verysimple/react";
import ComponentPage from "../ComponentPage";
import { useState } from "react";

export const InteractiveDemo = () => {
        const [checked, setChecked] = useState(false);
        
  return (
    <div>
      <Switch 
        checked={checked}
        onChange={() => {
            setChecked(!checked);
        }}
      />
    </div>
  );
};

const SwitchPage = () => {
  return (
    <ComponentPage
      pageTitle="Switch"
      propsList={[
        {
          name: "checked",
          description: "The checked state of the switch.",
        },
        {
          name: "onChange",
          description: "The function to call when the switch state changes.",
        },
      ]}
      InteractiveDemo={InteractiveDemo}
      codeSnippet={`<Switch />`}
    />
  );
};

export default SwitchPage;
