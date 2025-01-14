"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

// NavLink component to handle individual navigation links
const NavLink: React.FC<NavLinkProps> = ({
  href,
  isExternal = false,
  children,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-nowrap align-middle text-gray-800 transition duration-150 ease-in-out hover:text-primary-800 ${
        isActive ? "text-primary-800" : ""
      }`}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </Link>
  );
};

// Navigation component to render the list of navigation links
const Navigation: React.FC = () => {
  const navLinks = [
    { label: "About", path: "/about", isExternal: false },
    {
      label: "GitHub",
      path: "https://github.com/trypear/pearai-master",
      isExternal: true,
    },
    {
      label: "Discord",
      path: "https://discord.gg/AKy5FmqCkF",
      isExternal: true,
    },
    {
      label: "Download",
      path: "/pricing",
      isExternal: false,
      mobile: false,
    },
    {
      label: "Docs",
      path: "/docs",
      isExternal: false,
      mobile: false,
    },
    {
      label: "FAQ",
      path: "/faq",
      isExternal: false,
      mobile: false,
    },
  ];

  return (
    <nav className="flex w-full items-center justify-start md:justify-center">
      <ul className="flex w-full items-center justify-start space-x-3.5 sm:space-x-6 md:justify-center">
        {navLinks.map((link) => (
          <li
            className={`${link.mobile === false && "hidden sm:block"}`}
            key={link.label}
          >
            <NavLink href={link.path} isExternal={link.isExternal}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
