"use client";

import { Card } from "@verysimple/react";
import { FC } from "react";

export interface PropsListItem {
  name: string;
  description: string;
}

export interface ComponentPageProps {
  pageTitle: string;
  propsList: PropsListItem[];
  InteractiveDemo: FC;
  codeSnippet?: string;
  description?: string;
}

const ComponentPage: FC<ComponentPageProps> = ({
  pageTitle,
  propsList,
  InteractiveDemo,
  codeSnippet,
  description,
}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
        {description}
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Props</h2>
      <dl>
        {propsList.map((prop) => (
          <div className="mb-4" key={prop.name}>
            <dt>
              <h3 className="font-mono">{prop.name}</h3>
            </dt>
            <dd>
              <p className="text-zinc-500 dark:text-zinc-400">
                {prop.description}
              </p>
            </dd>
          </div>
        ))}
      </dl>
      <h2 className="text-2xl font-bold mt-8 mb-4">Usage</h2>
      <h2 className="text-2xl font-bold mt-8 mb-4">Interactive Demo</h2>
      <InteractiveDemo />
      <h2 className="text-2xl font-bold mt-8 mb-4">Code Snippet</h2>
      <Card className="bg-zinc-900 p-5">
        <pre className="text-sm text-zinc-500 dark:text-zinc-400">
          {codeSnippet}
        </pre>
      </Card>
    </div>
  );
};

export default ComponentPage;
