"use client";

import { Chip } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

const ChipPage = () => {
  return (
    <ComponentPage
      pageTitle="Chip"
      description="The chip component is used to display content in a chip."
      propsList={[
        {
          name: "as",
          description: "The element type of the Chip.",
        },
        {
          name: "size",
          description: "The size of the Chip.",
        },
      ]}
      InteractiveDemo={() => <Chip>This is a Chip</Chip>}
      codeSnippet={`<Chip>This is a Chip</Chip>`}
    />
  );
};

export default ChipPage;
