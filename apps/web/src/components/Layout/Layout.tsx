"use client";

import { Fragment, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { usePathname } from "next/navigation";
import {
  IconButton,
  TextButton,
  fieldPaddingClassNames,
  fieldSizeClassNames,
} from "@verysimple/react";
import classNames from "classnames";
import Link from "next/link";
import useLockBodyScroll from "@/lib/useLockBodyScroll";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/lib/useMediaQuery";
import CopyToClipboardButton from "../CopyToClipboardButton";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const MenuItemButton = ({ className, ...props }: any) => {
  return (
    <TextButton
      {...props}
      className={classNames(
        "w-full flex justify-start items-center normal-case tracking-normal font-normal ",
        className
      )}
    />
  );
};

const menuSections = [
  // {
  //   header: "General",
  //   items: [
  //     { name: "Getting Started", href: "/getting-started" },
  //     { name: "Installation", href: "/installation" },
  //     { name: "Theming", href: "/theming" },
  //   ],
  // },
  {
    header: "Components",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Card", href: "/components/card" },
      { name: "Chip", href: "/components/chip" },
      { name: "Dialog", href: "/components/dialog" },
      { name: "Input", href: "/components/input" },
      { name: "Switch", href: "/components/switch" },
    ],
  },
];

const MenuItems = (props: any) => {
  const pathname = usePathname();
  return (
    <Menu.Items as="div" {...props}>
      <div className="max-w-screen-xl mx-auto">
        {menuSections.map((section) => (
          <div key={section.header} className="mb-5">
            <h2
              className={classNames(
                "flex items-center font-extrabold tracking-tighter",
                fieldSizeClassNames("sm"),
                fieldPaddingClassNames("sm")
              )}
            >
              {section.header}
            </h2>
            {section.items.map((item) => (
              <Menu.Item as={Fragment} key={item.name}>
                <Link href={item.href} legacyBehavior>
                  <MenuItemButton
                    as="a"
                    size="sm"
                    color={pathname.endsWith(item.href) ? "primary" : "neutral"}
                    className="tracking-tighter font-medium"
                  >
                    {item.name}
                  </MenuItemButton>
                </Link>
              </Menu.Item>
            ))}
          </div>
        ))}
      </div>
    </Menu.Items>
  );
};

const LayoutWithMenuStateProps = ({ children, menuOpen, closeMenu }: any) => {
  const pathname = usePathname();

  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    closeMenu();
  }, [isMd]);

  useEffect(() => {
    if (menuOpen) {
      closeMenu();
    }
  }, [pathname]);

  useLockBodyScroll(menuOpen);

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <header className="w-full z-50 shadow bg-background">
        <div className="mx-auto max-w-screen-xl h-20 flex items-center justify-between px-5">
          <Link href="/">
            {" "}
            <h1 className="text-3xl font-semibold flex items-center gap-1 tracking-tighter">
              <span role="img" aria-label="sparkles">
                ✨
              </span>
              verysimple
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <CopyToClipboardButton
              size="sm"
              variant="filled"
              text="yarn add @verysimple/react"
              className="hidden sm:inline-flex"
            />
            <IconButton variant="filled" size="sm" onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }}>
              {resolvedTheme === "light" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </IconButton>
            <Menu.Button
              as={IconButton}
              size="sm"
              className="sm:hidden shrink-0"
              color="primary"
            >
              {menuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars2Icon className="h-5 w-5" />
              )}
            </Menu.Button>
          </div>
        </div>
      </header>
      {isMd ? (
        <MenuItems className="absolute w-64 mt-2 top-12 right-5 z-30 bg-foreground shadow rounded py-3" />
      ) : (
        <MenuItems className="z-40 fixed top-0 w-screen h-screen pt-24 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg left-0 p-2" />
      )}
      {children}
    </>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu>
        {({ open, close }) => (
          <LayoutWithMenuStateProps menuOpen={open} closeMenu={close}>
            {children}
          </LayoutWithMenuStateProps>
        )}
      </Menu>
    </div>
  );
}
