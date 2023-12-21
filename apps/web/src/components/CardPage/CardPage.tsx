"use client";

import { Card } from "@verysimple/react";
import ComponentPage from "../ComponentPage";

const CardPage = () => {
  return (
    <ComponentPage
      pageTitle="Card"
      description="The card component is used to display content in a card."
      propsList={[
        {
          name: "as",
          description: "The element type of the Card.",
        },
      ]}
      InteractiveDemo={() => <Card>This is a Card</Card>}
      codeSnippet={`<Card>This is a Card</Card>`}
    />
  );
};

export default CardPage;
