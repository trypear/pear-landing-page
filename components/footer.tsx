import { footerSections, socialMediaLinks } from "@/utils/constants";
import Link from "next/link";
import PearDarkLogo from "./ui/PearDark.svg";
import { Button } from "./ui/button";
import { AppleLogo, WindowsLogo } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-4 pt-20 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        {/* Logo and tagline */}
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link className="-ml-1 inline-block dark:invert" href="/">
            <PearDarkLogo />
          </Link>
          <p className="mt-5 leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Speed up your development process by seamlessly integrating AI into
            your workflow.
          </p>
        </div>

        {/* Sections with links */}
        {footerSections.map(({ title, links }, idx) => (
          <div key={idx}>
            <h5 className="font-semibold">{title}</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              {links.map(({ text, href }, idx) => (
                <li key={idx}>
                  <Link href={href} className="hover:text-primary-600">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Download Section */}
        <div>
          <h5 className="font-semibold">Download</h5>
          <div className="w-full max-w-min">
            <Button asChild className="mt-4 w-full justify-start">
              <Link href="/pricing">
                <AppleLogo className="h-4 w-4" />
                <span>Windows</span>
              </Link>
            </Button>
            <Button asChild className="mt-3 w-full justify-start">
              <Link href="/pricing">
                <WindowsLogo className="h-4 w-4" />
                <span>Mac</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Social media links */}
        <div className="-mr-2 flex items-center gap-1">
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <Button
              key={link}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        {/* Copyright */}
        <span>
          &copy; {new Date().getFullYear()} PearAI - All rights reserved.
        </span>
      </div>
    </footer>
  );
}
