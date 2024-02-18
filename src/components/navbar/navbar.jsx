"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ModeToggle } from "../toggle-theme";

const baseLinkClasses = clsx(
  "flex grow items-center justify-center px-2 p-3 text-sm font-medium rounded-lg hover:bg-sky-50 hover:transition duration-300 ease-in hover:text-black  md:flex-none md:justify-start md:p-2 md:px-3 bg-bkg text-content hidden md:block"
);

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex border-b py-2 px-8 md:px-20 w-full items-center justify-between mb-8">
        <h1 className="font-bold text-xl text-content">TOME WEAVER</h1>
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
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
