"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import { Button } from "@/components/ui/button";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
      {theme === "dark" ? (
        <PearDarkHeroLogo
          width="26"
          alt="PearAI Logo"
          className="-mt-2.5 mr-2 inline-flex"
        />
      ) : (
        <PearHeroLogo
          width="26"
          alt="PearAI Logo"
          className="-mt-2.5 mr-2 inline-flex"
        />
      )}
      <span className="text-primary-700">PearAI: </span>
      The Open Source AI&#8209;Powered Code Editor
    </div>

    <div className="block items-start sm:hidden">
      <div>
        {theme === "dark" ? (
          <PearDarkHeroLogo
            width="20"
            alt="PearAI Logo"
            className="-mt-2.5 mr-2 inline-flex"
          />
        ) : (
          <PearHeroLogo
            width="20"
            alt="PearAI Logo"
            className="-mt-2.5 mr-2 inline-flex"
          />
        )}
        <span className="text-primary-700">PearAI </span>
      </div>
      <span className="flex flex-col text-3xl">
        <span>The Open Source</span> <span>AI&#8209;Powered Code Editor</span>
      </span>
    </div>
  </>
);

const HeroDescription = () => (
  <div className="mt-6 max-w-lg">
    <p
      className="mb-2 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Speed up your development process by seamlessly integrating AI into your
      workflow 🚀
    </p>
    <p
      className="mb-4 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Afraid of switching editors? No need, Pear is a fork of VSCode and retains
      all its features, you&apos;ll feel right at home 😏
    </p>
  </div>
);

const HeroButtons = () => (
  <div className="mx-auto flex max-w-sm items-center justify-center space-x-2.5 sm:max-w-none">
    <div data-aos="fade-up" data-aos-delay="400">
      <Button asChild size="lg">
        <Link href="https://forms.gle/171UyimgQJhEJbhU7">Join Waitlist</Link>
      </Button>
    </div>
    <div data-aos="fade-up" data-aos-delay="500">
      <Button asChild size="lg" variant="outline" className="sm:w-auto">
        <Link href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing">
          More Details
        </Link>
      </Button>
    </div>
  </div>
);

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
