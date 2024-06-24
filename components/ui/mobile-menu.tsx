"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { HamburgerMenuIcon } from "./icons";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger hover:text-gray-600 ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <HamburgerMenuIcon className="h-6 w-6 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200" />
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute left-0 top-full z-20 flex w-full animate-fadein-opacity flex-col items-center justify-center space-y-2 overflow-hidden bg-white-50 px-4 text-xl text-black transition-all duration-300 ease-in-out sm:px-6 md:bg-transparent md:backdrop-blur-[2px]"
        style={mobileNavOpen ? { opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <Button
          asChild
          className="w-full rounded-full bg-primary-700 text-white-50 hover:bg-primary-800 hover:shadow-sm"
        >
          <Link onClick={() => setMobileNavOpen(false)} href={"/signin"}>
            Sign In
          </Link>
        </Button>
        <Button
          asChild
          className="w-full rounded-full border border-primary-700 text-primary-700 hover:border-primary-800 hover:text-primary-800 hover:shadow-sm"
        >
          <Link onClick={() => setMobileNavOpen(false)} href={"/signup"}>
            Sign Up
          </Link>
        </Button>

        <p>{""}</p>
      </nav>
    </div>
  );
}
