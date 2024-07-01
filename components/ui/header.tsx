import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark.svg";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Header() {
  // navigation bar links
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
  ];

  const supabase = createClient();
  const supabaseUser = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed top-0 z-30 w-full animate-fadein-opacity bg-white-50 bg-opacity-80 shadow-sm backdrop-blur-[16px]">
      <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-2">
        <div className="text-md flex h-10 items-center justify-between text-secondary-600 transition ease-in-out sm:text-lg">
          {/* Site branding */}
          <div className="flex flex-row items-start space-x-2">
            {/* Logo */}
            <Link className="-mt-0.5 sm:mt-0" href="/">
              <PearDarkLogo />
            </Link>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-secondary-400" href={link.path}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <AuthButton />
          {/* AuthButton is hidden in production */}
          <MobileMenu
            supabaseUser={
              supabaseUser.error != null
                ? supabaseUser.error.message
                : supabaseUser
            }
            handleSignOut={handleSignOut}
          />
        </div>
      </div>
    </header>
  );
}
