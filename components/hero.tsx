"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import { Button } from "@/components/ui/button";
import { YCombinatorLogo } from "@/components/ui/icons";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
      <div className="flex justify-center">
        {theme === "dark" ? (
          <PearDarkHeroLogo
            width="26"
            alt="PearAI Logo"
            className="mb-4 mr-2 inline-flex"
          />
        ) : (
          <PearHeroLogo
            width="35"
            height="50"
            alt="PearAI Logo"
            className="-mt-[0.25rem] mb-4 mr-2 inline-flex"
          />
        )}
        <p className="text-primary-700">PearAI </p>
      </div>
      The Open Source AI Code Editor
    </div>

    <div className="block items-start sm:hidden">
      <div>
        {theme === "dark" ? (
          <PearDarkHeroLogo
            width="20"
            alt="PearAI Logo"
            className="mb-3 mr-2 inline-flex"
          />
        ) : (
          <PearHeroLogo
            width="20"
            alt="PearAI Logo"
            className="mb-3 mr-2 inline-flex"
          />
        )}
        <span className="text-primary-700">PearAI </span>
      </div>
      <span className="flex flex-col text-3xl">
        <span>The Open Source</span> <span>AI Code Editor</span>
      </span>
    </div>
  </>
);

const HeroDescription = () => (
  <div className="mt-6 max-w-lg">
    <p
      className="mb-8 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Speed up your development by combining the familiarity of VSCode, with{" "}
      <Link
        href="/faq#extension"
        className="text-primary-800 hover:text-primary-800/80"
      >
        native integrations
      </Link>{" "}
      of the best AI tools curated for your productivity 🚀
    </p>
  </div>
);
const HeroButtons = () => {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center sm:max-w-none">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex flex-col items-center"
      >
        <Button asChild size="lg">
          <Link href="/pricing">Download For Free</Link>
        </Button>
        <div
          className="mt-10 flex items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="mr-[-0.1rem] mt-[0.12rem] text-sm text-gray-500">
            Backed by
          </span>
          <Link
            href="https://www.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YCombinatorLogo className="h-14 w-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default function Hero() {
  const { theme } = useTheme();

  return (
    <section>
      <div className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative pb-10 pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center pb-12 text-center md:pb-16">
            <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              <HeroTitle theme={theme!} />
            </div>
            <HeroDescription />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
