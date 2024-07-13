import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark.svg";
import DarkModeToggle from "./darkmode-toggle";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Header() {
  // navigation bar links
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
  ];

  const supabase = createClient();
  const supabaseUserResponse = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <>
      <div className="fixed top-0 z-30 w-full animate-fadein-opacity border-b border-gray-400/20 bg-gray-100/10 backdrop-blur-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-2">
          <div className="text-md flex h-10 items-center justify-between transition ease-in-out sm:text-lg">
            {/* Site branding */}
            <div className="flex flex-row items-center space-x-2">
              {/* Logo */}
              <Link className="-mt-0.5 dark:invert sm:mt-0" href="/">
                <PearDarkLogo />
              </Link>
              {/* Navigation */}
              <nav className="">
                <ul className="flex space-x-3.5">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="align-middle hover:text-gray-700"
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <AuthButton />
              {/* AuthButton is hidden in production */}

              <span
                className="hidden h-6 w-px rounded-full bg-gray-300 md:block"
                id="button__divider"
              ></span>

              <DarkModeToggle />
              {/* DARK/LIGHT MODE TOGGLE */}

              <span
                className="h-6 w-px rounded-full bg-gray-300 md:hidden"
                id="button__divider"
              ></span>

              <MobileMenu
                supabaseUser={
                  supabaseUserResponse.error || !supabaseUserResponse.data.user
                    ? "User not found"
                    : supabaseUserResponse
                }
                handleSignOut={handleSignOut}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
