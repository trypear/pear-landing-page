import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearLightLogo from "./PearLight70x70.svg";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full md:bg-transparent bg-white-50 md:backdrop-blur-sm">
      <div className="mx-auto  max-w-screen-xl px-4 py-4 sm:px-6">
        <div className="roboto-medium flex h-20 items-center justify-between text-2xl md:text-xl text-black transition ease-in-out hover:text-gray-600">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <div className="flex flex-row space-x-3">
                <Link href={"/about"}>About</Link>
                <Link href={"https://discord.gg/AKy5FmqCkF"}>Discord</Link>
                <Link href={"https://github.com/trypear/pearai-app"}>
                  Github
                </Link>
              </div>
            </ul>
          </div>
          {/* Desktop navigation */}
          {process.env.NODE_ENV !== "production" && <AuthButton />}{" "}
          {/* AuthButton is hidden in production */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
