import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark.svg";
import PearLightLogo from "./PearLight16x16.svg";
import DarkModeToggle from "./darkmode-toggle";

export default function Header() {
  // navigation bar links
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
  ];
  return (
    <header className="fixed top-0 z-30 w-full animate-fadein-opacity border-b border-gray-100 bg-white-50 bg-opacity-60 shadow-sm backdrop-blur-[16px] dark:border-gray-800 dark:bg-gray-900/60">
      <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-2">
        <div className="text-md flex h-10 items-center justify-between text-secondary-600 transition ease-in-out dark:text-white-300 sm:text-lg">
          {/* Site branding */}
          <div className="flex flex-row items-start space-x-2">
            {/* Logo */}
            <Link className="-mt-0.5 dark:invert sm:mt-0" href="/">
              <PearDarkLogo />
            </Link>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="hover:text-secondary-400 dark:text-gray-300 dark:hover:text-gray-300"
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
              className="h-6 w-px rounded-full bg-gray-300 dark:bg-gray-500"
              id="button__divider"
            ></span>

            <DarkModeToggle />
            {/* DARK/LIGHT MODE TOGGLE */}
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
