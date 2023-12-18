import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VerySimple UI Components",
  description:
    "Simple, customizable and accessible UI components for React and Tailwind projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "antialiased")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
