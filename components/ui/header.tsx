import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import PearDarkLogo from "./PearDark.svg";
import DarkModeToggle from "./darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed top-0 z-30 w-full animate-fadein-opacity border-b border-gray-400/20 bg-gray-100/10 backdrop-blur-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="flex items-center">
            <Link href="/" className="dark:invert">
              <PearDarkLogo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.user_metadata.avatar_url} />
                    <AvatarFallback>
                      {user.email[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Button asChild variant="ghost">
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
