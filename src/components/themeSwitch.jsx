"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const baseLinkClasses = clsx(
  "flex grow items-center justify-center px-2 p-3 text-sm font-medium rounded-md hover:bg-sky-50 hover:transition duration-300 ease-in hover:text-black md:flex-none md:justify-start md:p-2 md:px-3 bg-bkg text-content"
);

export default function ThemeSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    toggleButton();
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MoonIcon className=" w-6 h-6" role="button" onClick={toggleButton} />
      );
    } else {
      return (
        <SunIcon className="  w-6  h-6" role="button" onClick={toggleButton} />
      );
    }
  };
  return (
    <>
      {renderThemeChanger()}
      {isOpen && (
        <div className="absolute right-0 my-2  p-1 w-32 rounded-md shadow-lg border-2  top-full z-50 font-medium text-gray-500 transition duration-500 ease-in-out">
          <button
            onClick={() => handleTheme("light")}
            className={clsx(baseLinkClasses, "w-full")}
          >
            Light
          </button>
          <button
            onClick={() => handleTheme("dark")}
            className={clsx(baseLinkClasses, "w-full")}
          >
            Dark
          </button>
          <button
            onClick={() => handleTheme("system")}
            className={clsx(baseLinkClasses, "w-full")}
          >
            System
          </button>
        </div>
      )}
    </>
  );
}
