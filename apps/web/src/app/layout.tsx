import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

const title = "VerySimple UI Components";
const description =
  "Simple, customizable and accessible UI components for React and Tailwind projects.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://verysimple.dev",
    images: [
      "https://res.cloudinary.com/ben-tatum/image/upload/v1702927298/VerySimple_OG.png",
    ],
  },
  twitter: {
    title,
    description,
    // site: "@benjtatum",
    // siteId: "benjtatum",
    // creator: "@benjtatum",
    // creatorId: "benjtatum",
    images: [
      "https://res.cloudinary.com/ben-tatum/image/upload/v1702927298/VerySimple_OG.png",
    ],
  },
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
