"use client";

import {
  Button,
  fieldPaddingClassNames,
  fieldSizeClassNames,
} from "@verysimple/react";
import classNames from "classnames";

const NavButton = ({ children }: any) => {
  return (
    <li>
      <Button
        size="md"
        className="font-regular w-full text-left flex items-center justify-start"
      >
        {children}
      </Button>
    </li>
  );
};

const NavHeader = ({ children }: any) => {
  return (
    <li>
      <h2
        className={classNames(
          "text-lg flex items-center font-semibold",
          fieldSizeClassNames("md"),
          fieldPaddingClassNames("md")
        )}
      >
        {children}
      </h2>
    </li>
  );
};

const SidebarNav = () => {
  return (
    <nav className="z-30 rounded flex flex-col gap-5 mt-5 shadow-lg h-screen">
      <ul>
        <NavHeader>General</NavHeader>
        <NavButton>Getting Started</NavButton>
        <NavButton>Installation</NavButton>
        <NavButton>Theming</NavButton>
      </ul>
      <ul>
        <NavHeader>Components</NavHeader>
        <NavButton>Button</NavButton>
        <NavButton>Card</NavButton>
        <NavButton>Dialog</NavButton>
      </ul>
    </nav>
  );
};

export default SidebarNav;
