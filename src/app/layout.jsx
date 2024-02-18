import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  return (
    <html lang="en" className=" h-screen" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
