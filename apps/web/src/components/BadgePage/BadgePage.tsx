"use client";

import { Card, Badge } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

const BadgePage = () => {
  return (
    <ComponentPage
      pageTitle="Badge"
      description="The Badge component is used to decorate a component with a badge."
      propsList={[
        {
          name: "badgeContent",
          description: "The content of the Badge.",
        },
        {
          name: "badgePosition",
          description:
            "The position of the Badge. It can be 'top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-right', or 'bottom-left'.",
        },
      ]}
      InteractiveDemo={() => (
        <div className="w-20">
          <Badge
            badgeContent={<div className="h-3 w-3 bg-green-500 rounded-full" />}
          >
            <Card className="bg-foreground h-10 w-20" />
          </Badge>
        </div>
      )}
      codeSnippet={`<div className="w-20">
  <Badge
    badgeContent={<div className="h-3 w-3 bg-green-500 rounded-full" />}
  >
    <Card className="bg-foreground h-10 w-20" />
  </Badge>
</div>`}
    />
  );
};

export default BadgePage;
