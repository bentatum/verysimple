"use client";

import { IconButton } from "@verysimple/react";
import { Bars2Icon } from "@heroicons/react/24/outline";

const TopBar = ({ menuButtonProps }: any) => {
  return (
    <header className="px-2">
      <div className="h-20 flex items-center justify-between px-5">
        <h1 className="text-3xl font-semibold flex items-center gap-1">
          <span role="img" aria-label="sparkles">
            ✨
          </span>
          verysimple
        </h1>
        <IconButton {...menuButtonProps}>
          <Bars2Icon className="h-7 w-7" />
        </IconButton>
      </div>
    </header>
  );
};
export default TopBar;
