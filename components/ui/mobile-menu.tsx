"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
        <svg
          className="h-6 w-6 fill-current text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute left-0 top-full z-20 flex w-full animate-fadein-opacity flex-col items-center justify-center space-y-2 overflow-hidden bg-white-50 px-4 text-xl text-black transition-all duration-300 ease-in-out sm:px-6 md:bg-transparent md:backdrop-blur-[2px]"
        style={mobileNavOpen ? { opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <Link
          className="h-full w-full rounded-md bg-primary-500 py-3 text-center backdrop-blur-3xl"
          onClick={() => setMobileNavOpen(false)}
          href={"/"}
        >
          Sign In
        </Link>
        <Link
          className="h-full w-full rounded-md bg-black py-3 text-center text-white-50 backdrop-blur-3xl"
          onClick={() => setMobileNavOpen(false)}
          href={"/"}
        >
          Sign Up
        </Link>
        <p>{""}</p>
      </nav>
    </div>
  );
}
