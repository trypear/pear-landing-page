import Link from "next/link";
import PearDarkLogo from "./ui/PearDark.svg";
import {
  AppleLogo,
  DiscordLogo,
  GitHubLogo,
  LinkedInLogo,
  WindowsLogo,
} from "./ui/icons";
import { Button } from "./ui/button";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Contact",
        href: "mailto:pear@trypear.ai",
      },
      {
        text: "Priority Waitlist",
        href: "/priority-waitlist",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        text: "Features",
        href: "/#features",
      },
      {
        text: "Pricing",
        href: "/pricing",
      },
      {
        text: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        text: "FAQ",
        href: "/faq",
      },
      {
        text: "Privacy Policy",
        href: "/privacy",
      },
      {
        text: "Terms of Service",
        href: "/terms-of-service",
      },
    ],
  },
];

const socialMediaLinks = [
  {
    icon: GitHubLogo,
    link: "https://github.com/trypear/pearai-app",
  },
  {
    icon: DiscordLogo,
    link: "https://discord.gg/AKy5FmqCkF",
  },
  {
    icon: LinkedInLogo,
    link: "https://www.linkedin.com/company/trypearai",
  },
];

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
          <Button asChild className="mt-4">
            <Link href="/pricing">
              <AppleLogo className="h-4 w-4" />
              <span className="sm:hidden">Download Now</span>
              <span className="hidden sm:inline">Download for Free</span>
            </Link>
          </Button>
          <Button asChild className="mt-3">
            <Link href="/pricing">
              <WindowsLogo className="h-4 w-4" />
              <span className="sm:hidden">Download Now</span>
              <span className="hidden sm:inline">Download for Free</span>
            </Link>
          </Button>
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
              <Link href={link} target="_blank">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        {/* Copyright */}
        <span>&copy; PearAI - All rights reserved.</span>
      </div>
    </footer>
  );
}
