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
    { label: "About", path: "/about", isExternal: false },
    {
      label: "GitHub",
      path: "https://github.com/trypear/pearai-app",
      isExternal: true,
      target: "_blank",
    },
    {
      label: "Discord",
      path: "https://discord.gg/AKy5FmqCkF",
      isExternal: true,
      target: "_blank",
    },
    {
      label: "Pricing",
      path: "/pricing",
      isExternal: false,
      mobile: false,
    },
    {
      label: "Priority Waitlist",
      path: "/priority-waitlist",
      isExternal: false,
      mobile: false,
    },
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
          <div className="text-md flex h-10 w-full items-center justify-between transition ease-in-out sm:text-lg">
            {/* Site branding */}
            <div className="flex w-[14%] flex-row items-center space-x-2 md:w-[36%]">
              {/* Logo */}
              <Link className="-mt-0.5 dark:invert sm:mt-0" href="/">
                <PearDarkLogo />
              </Link>
            </div>

            <div className="flex w-full flex-row items-center space-x-2">
              {/* Navigation */}
              <nav className="flex w-full items-center justify-start md:justify-center">
                <ul className="flex w-full items-center justify-start space-x-6 md:justify-center">
                  {navLinks.map((link) => (
                    <li
                      className={`${link.mobile === false && "hidden sm:block"}`}
                      key={link.label}
                    >
                      <Link
                        className="align-middle text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
                        href={link.path}
                        target={link.target}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex w-[28%] flex-row items-center justify-end space-x-2.5 md:w-[36%]">
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
