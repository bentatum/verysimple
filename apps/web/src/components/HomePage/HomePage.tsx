"use client";

import { Button, Chip, Badge, TextField } from "@verysimple/react";
import CopyToClipboardButton from "../CopyToClipboardButton";
import classNames from "classnames";
import ComponentDisplayCard from "../ComponentDisplayCard";
import Link from "next/link";
import { InteractiveDemo as SwitchInteractiveDemo } from "../SwitchPage";
import { InteractiveDemo as InputInteractiveDemo } from "../InputPage";
import { InteractiveDemo as SelectInteractiveDemo } from "../SelectPage";
import { Card } from "@verysimple/react";

const ComponentDisplayCardTitle: React.FC<any> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        "text-4xl",
        {
          "font-black": !/font-/.test(className),
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

const Section: React.FC<any> = ({ className, children }) => {
  return (
    <section className={classNames("py-20", className)}>{children}</section>
  );
};

const HomePage = () => {
  const stars = Array.from({ length: 1000 }).map((_, i) => (
    <div
      key={i}
      className="absolute w-px h-px rounded-full bg-white animate-twinkle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  const componentCards = [
    {
      href: "/components/button",
      title: "Button",
      children: <Button color="primary">Click me</Button>,
    },
    {
      href: "/components/badge",
      title: "Badge",
      children: (
        <Badge
          badgeContent={<div className="h-3 w-3 bg-green-500 rounded-full" />}
        >
          <Card className="bg-foreground h-10 w-20" />
        </Badge>
      ),
    },
    {
      href: "/components/card",
      title: "Card",
    },
    {
      href: "/components/chip",
      title: "Chip",
      children: <Chip>@bentatum</Chip>,
    },
    {
      href: "/components/dialog",
      title: "Dialog",
    },
    // {
    //   href: "/components/text-field",
    //   title: "TextField",
    //   children: (
    //     <TextField
    //       id="textfield-demo"
    //       label="Greetings"
    //       placeholder="Type here..."
    //       helpText="hello"
    //     />
    //   ),
    // },
    {
      href: "/components/input",
      title: "Input",
      children: <InputInteractiveDemo />,
    },
    {
      href: "/components/select",
      title: "Select",
      children: <SelectInteractiveDemo />,
    },
    {
      href: "/components/switch",
      title: "Switch",
      children: <SwitchInteractiveDemo />,
    },
  ];

  return (
    <div>
      <div className="bg-gray-900 relative min-h-screen text-white">
        {stars}
        <Section className="px-5 overflow-auto h-[500px] w-full bg-gradient-to-b from-primary-500/20 to-transparent text-center">
          <div className=" select-none relative z-20 flex flex-col gap-5 justify-center h-full">
            <h1 className="drop-shadow text-6xl font-extrabold tracking-tighter mx-auto max-w-lg">
              Very Simple React Components
            </h1>
            <p>The best way to use Tailwind CSS in React.</p>
            <div className="flex justify-center gap-2">
              <CopyToClipboardButton
                color="primary"
                variant="filled"
                text="yarn add @verysimple/react"
              />
            </div>
          </div>
        </Section>

        {/* <Section className=" text-white">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-4xl font-semibold tracking-tighter drop-shadow-sm text-white mb-5">
              Why?
            </h2>
            <p>
              VerySimple components are designed to work seamlessly with
              Tailwind CSS classnames. We provide a basic set of
              semi-opinionated components on top of headlessui and framer motion
              that are easy to extend or override using Tailwind classes.
            </p>
          </div>
        </Section> */}

        <Section className="">
          <div className="px-5 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {componentCards.map((card) => (
              <ComponentDisplayCard key={card.href}>
                <Link href={card.href}>
                  <ComponentDisplayCardTitle>
                    {card.title}
                  </ComponentDisplayCardTitle>
                </Link>
                {card.children}
              </ComponentDisplayCard>
            ))}
          </div>
        </Section>
        <Section className="flex flex-col items-center">
          <p>Stay tuned</p>
          <p>
            <a
              href="http://bentatum.com"
              className="font-medium bg-gradient-to-r from-primary-300 to-primary-700 text-transparent bg-clip-text"
            >
              bentatum.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
};

export default HomePage;
