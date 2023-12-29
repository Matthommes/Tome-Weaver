import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";

const baseLinkClasses = clsx(
  "flex grow items-center justify-center px-2 p-3 text-sm font-medium rounded-md hover:bg-sky-50 hover:transition duration-300 ease-in hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
);

// const activeLinkClasses = clsx("bg-sky-100 text-blue-600");

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("system");

  const handleSelectedTheme = (theme) => {
    setSelectedTheme(theme);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex border-b py-2 px-20 w-full items-center justify-between mb -8">
        <h1 className="font-bold text-xl">TOME WEAVER</h1>
        <div className="flex gap-2">
          <Link
            className={clsx(baseLinkClasses, {
              activeLinkClasses: pathname === "/signup",
            })}
            href="/signup"
          >
            Try now
          </Link>
          <Link
            className={clsx(baseLinkClasses, {
              activeLinkClasses: pathname === "/signin",
            })}
            href="/signin"
          >
            Sign in
          </Link>
          <div className="relative">
            <button
              onClick={handleClick}
              className={clsx(baseLinkClasses, "border gap-2")}
            >
              <SunIcon className="w-6 h-6" />
            </button>
            {isOpen && (
              <div className="absolute right-0 my-2  p-1 w-32 bg-white rounded-md shadow-lg font-medium text-gray-500 transition duration-500 ease-in-out">
                <button
                  onClick={() => handleSelectedTheme("light")}
                  className={clsx(baseLinkClasses, "w-full")}
                >
                  Light
                </button>
                <button
                  onClick={() => handleSelectedTheme("dark")}
                  className={clsx(baseLinkClasses, "w-full")}
                >
                  Dark
                </button>
                <button
                  onClick={() => handleSelectedTheme("system")}
                  className={clsx(baseLinkClasses, "w-full")}
                >
                  System
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
