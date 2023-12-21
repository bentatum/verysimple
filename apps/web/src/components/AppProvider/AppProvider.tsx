"use client";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const AppProviders = ({ children }: any) => {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Analytics />
    </ThemeProvider>
  );
};

export default AppProviders;
