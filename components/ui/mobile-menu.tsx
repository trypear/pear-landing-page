"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  path: string;
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  const navLinks: NavLink[] = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
    { label: "Priority Waitlist", path: "/priority-waitlist" },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        className="flex items-center p-2 text-gray-700 hover:text-gray-600 focus:outline-none"
        aria-label="Toggle mobile menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <Menu
            className={`h-6 w-6 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <X
            className={`h-6 w-6 absolute left-0 top-0 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </button>

      <div
        ref={menuRef}
        className={`
          absolute left-0 top-full z-20 w-full bg-white-50 border-y border-gray-200 transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <ul className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                className="block py-2 text-gray-800 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Button asChild className="w-full">
            <Link href="/signin" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
