import React from "react";
import { Inter } from "next/font/google";
// import { useTheme } from "next-themes";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = () => {
  return {
    title: "Tome Weaver",
    description:
      "Imagine the app as a tool for crafting unique reading experiences. ",
  };
};

export default function RootLayout({ children }) {
  // const { theme } = useTheme();
  return (
    <html lang="en" className=" h-screen"  suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
