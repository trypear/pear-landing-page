import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark.svg";
import DarkModeToggle from "./darkmode-toggle";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Navigation from "./navLink";

export default async function Header() {
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
          <div className="text-md flex h-10 w-full items-center justify-between transition ease-in-out sm:text-lg">
            {/* Site branding */}
            <div className="flex w-[14%] flex-row items-center space-x-2 md:w-[36%]">
              {/* Logo */}
              <Link className="-mt-0.5 sm:mt-0 dark:invert" href="/">
                <PearDarkLogo />
              </Link>
            </div>

            <div className="ml-2 flex w-full flex-row items-center space-x-2 sm:ml-0">
              {/* Navigation */}
              <Navigation />
            </div>

            <div className="flex w-[28%] flex-row items-center justify-end space-x-2.5 md:w-[36%]">
              {/* AuthButton is hidden in production */}
              <AuthButton />

              <span
                className="hidden h-6 w-px rounded-full bg-gray-300 md:block"
                id="button__divider"
              ></span>

              {/* DARK/LIGHT MODE TOGGLE */}
              <DarkModeToggle />

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
