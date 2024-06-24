import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark.svg";

export default function Header() {
  // navigation bar links
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "Github", path: "https://github.com/trypear/pearai-app" },
  ];
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
          {process.env.NODE_ENV !== "production" && <AuthButton />}{" "}
          {/* AuthButton is hidden in production */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
