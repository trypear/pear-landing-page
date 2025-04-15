import { footerSections, socialMediaLinks } from "@/utils/constants";
import Link from "next/link";
import PearWhiteLogo from "./ui/PearWhiteLogo.svg";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F1F1F] px-6 py-[60px]">
      <div className="mx-auto max-w-3xl lg:max-w-[1049px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-5 sm:gap-6">
          {/* Logo and tagline */}
          <div className="col-span-full xl:col-span-2">
            <Link className="inline-block dark:invert" href="/">
              <PearWhiteLogo />
            </Link>
            <p className="mb-2 text-[#808080]">Make What Excites.</p>
            <p className="mb-4 text-[#808080] sm:mb-2">
              * For more information about how integrations are built into
              PearAI, see{" "}
              <span className="cursor-pointer text-white-50 underline hover:text-white-50/80">
                here.
              </span>
            </p>
            <Button className="bg-white-50 px-6 py-3 text-sm font-semibold text-black hover:bg-white-50/80 sm:text-base">
              <Link href="/pricing">Download</Link>
            </Button>
          </div>

          {/* Sections with links */}
          {footerSections.map(({ title, links }, idx) => (
            <div key={idx}>
              <h5 className="font-semibold text-white-50">{title}</h5>
              <ul className="mt-5 space-y-3 text-[#808080]">
                {links.map(({ text, href, target = "_self" }, idx) => (
                  <li key={idx}>
                    <Link
                      href={href}
                      target={target}
                      className="hover:text-white-50/80"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 border-b border-[#2B2B2B]" />

        <div className="flex flex-col items-center justify-between text-neutral-500 sm:flex-row-reverse">
          {/* Social media links */}
          <div className="-mr-[3px] flex items-center">
            {socialMediaLinks.map(({ icon: Icon, link }) => (
              <Button
                key={link}
                variant="ghost"
                size="icon"
                className="-mr-2 rounded-full hover:bg-transparent"
              >
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5 text-[#808080] hover:text-white-50/80" />
                </Link>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-base text-[#808080]">
            &copy; {new Date().getFullYear()} PearAI - All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
