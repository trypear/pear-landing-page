"use client";

import { useState, useRef, useEffect, SetStateAction, Dispatch } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { UserResponse } from "@supabase/supabase-js";

export const USER_NOT_FOUND: string = "User not found";

type SupabaseUserType = UserResponse | typeof USER_NOT_FOUND;

export default function MobileMenu({
  handleSignOut,
  supabaseUser,
}: {
  handleSignOut: () => Promise<never>;
  supabaseUser: SupabaseUserType;
}) {
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

  const navLinks = [
    { label: "Pricing", path: "/pricing" },
    { label: "Priority Waitlist", path: "/priority-waitlist" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        className="flex items-center py-2 text-gray-700 hover:text-gray-600 focus:outline-none"
        aria-label="Toggle mobile menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <Menu
            className={`h-6 w-6 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <X
            className={`absolute left-0 top-0 h-6 w-6 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </button>

      <div
        ref={menuRef}
        className={`absolute left-0 top-full z-20 w-full border-b border-gray-400/20 bg-gray-50 transition-all duration-300 ease-in-out ${isOpen ? "visible opacity-100" : "invisible opacity-0"} `}
      >
        <ul className="px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="flex w-full items-center justify-center py-2 text-gray-800 hover:text-gray-600"
                href={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-2 px-4 pb-4">
          {supabaseUser === USER_NOT_FOUND ? (
            <div className="flex items-center justify-center space-x-2.5">
              <Button asChild className="w-full rounded-full">
                <Link onClick={() => setIsOpen(false)} href={"/signin"}>
                  Sign in
                </Link>
              </Button>
              <Button asChild className="w-full" variant="outline">
                <Link onClick={() => setIsOpen(false)} href={"/signup"}>
                  Sign up
                </Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2.5">
              <Button asChild className="w-full rounded-full">
                <Link onClick={() => setIsOpen(false)} href={"/dashboard"}>
                  Dashboard
                </Link>
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                asChild
                variant="outline"
                className="w-full"
              >
                <form action={handleSignOut}>
                  <button className="w-full">Sign out</button>
                </form>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
