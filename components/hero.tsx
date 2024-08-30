"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import { Button } from "@/components/ui/button";
import Countdown, { LAUNCH_DATE } from "./countdown";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
      {theme === "dark" ? (
        <PearDarkHeroLogo
          width="26"
          alt="PearAI Logo"
          className="mb-4 mr-2 inline-flex"
        />
      ) : (
        <PearHeroLogo
          width="26"
          alt="PearAI Logo"
          className="mb-4 mr-2 inline-flex"
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
      Speed up your development by integrating AI the correct way 🚀
    </p>
    <p
      className="mb-4 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Afraid of switching editors? No need, PearAI is a fork of VSCode so
      you&apos;ll feel right at home 😏
    </p>
  </div>
);

const HeroButtons = ({ isReleased }: { isReleased: boolean }) => {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-center space-x-2.5 sm:max-w-none">
      <div data-aos="fade-up" data-aos-delay="400">
        {isReleased ? (
          <Button asChild size="lg">
            <Link href="/pricing">Download For Free</Link>
          </Button>
        ) : (
          <Button size="lg" disabled>
            Available August 30, 2024
          </Button>
        )}
      </div>
    </div>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const hasShownConfettiRef = useRef(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [recycleConfetti, setRecycleConfetti] = useState(true);
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    const checkReleaseStatus = () => {
      const releaseDate = new Date(LAUNCH_DATE);
      const now = new Date();

      if (now >= releaseDate) {
        setIsReleased(true);
        if (!hasShownConfettiRef.current) {
          hasShownConfettiRef.current = true;
          setShowConfetti(true);

          setTimeout(() => {
            setRecycleConfetti(false);
          }, 9000);

          setTimeout(() => {
            setShowConfetti(false);
          }, 13000);
        }
      } else {
        setIsReleased(false);
      }
    };

    checkReleaseStatus();
    const timer = setInterval(checkReleaseStatus, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      {showConfetti && (
        <Confetti
          className="absolute inset-0 max-w-full"
          numberOfPieces={300}
          recycle={recycleConfetti}
        />
      )}
      <div className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative pb-10 pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center pb-12 text-center md:pb-16">
            <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              <HeroTitle theme={theme!} />
            </div>
            <HeroDescription />
            <HeroButtons isReleased={isReleased} />
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
