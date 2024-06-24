import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearDarkLogo from "./PearDark26x24.svg";

export default function Header() {
  // navigation bar links
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
  ];
  return (
    <header className="fixed top-0 z-30 w-full animate-fadein-opacity bg-white-50 md:bg-opacity-40 md:bg-gradient-to-b md:from-white-50 md:backdrop-blur-[2px]">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4">
        <div className="flex h-10 items-center justify-between text-xl text-black transition ease-in-out">
          {/* Site branding */}
          <ul className="flex flex-row items-start space-x-2">
            {/* Logo */}
            <Link className="-mr-2" href={"/"}>
              <PearDarkLogo />
            </Link>
            {/* Nav titles */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="hover:text-gray-600"
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          {process.env.NODE_ENV !== "production" && <AuthButton />}{" "}
          {/* AuthButton is hidden in production */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
