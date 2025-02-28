"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AppleLogo, WindowsLogo } from "./ui/icons";
import { cn } from "@/lib/utils";
import Footer from "./footer";

const BetaPage: React.FC<{ user: any }> = ({ user }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientStyle = mounted
    ? {
        backgroundImage:
          "linear-gradient(45deg, #1a237e, #006064, #1b5e20, #006064, #b71c1c)",
        backgroundSize: "300% 300%",
        animation: "rainbow-animation 5s ease infinite",
        color: "white",
        transition: "all 0.3s ease",
      }
    : {};

  return (
    <section
      className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-24"
      aria-label="beta downloads"
    >
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1 className="mt-8 text-4xl font-medium leading-tight sm:text-4xl md:text-4xl lg:text-4xl">
              Download PearAI Beta Version
            </h1>
            <p className="text-lg text-gray-600">
              Try out the latest beta version of PearAI and let us know what you think in <a href="https://discord.gg/AKy5FmqCkF" className="text-blue-500 hover:text-blue-600 underline">Discord</a>!
            </p>
          </header>

          <div className="mt-8 flex w-full flex-col items-center">
            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2">
                <Button
                  className={cn("rainbow-gradient", "font-bold", "w-full")}
                  style={gradientStyle}
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/drive/folders/1kQjtQkg8fScj-pFvVdUT1X9Bky41Kkl_?usp=sharing")
                  }
                >
                  <AppleLogo className="mr-2 h-[18px] w-[18px] fill-current" />
                  MacOS M Chip
                </Button>
                <div className="text-sm text-gray-500">
                  version is v1.8.1-beta (February 28th, 2025)
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Button
                  className={cn("rainbow-gradient", "font-bold", "w-full")}
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/drive/folders/1n74VC3FWArMf6Td9sf0wEVzb1jMBpim_?usp=drive_link")
                  }
                >
                  <WindowsLogo className="h-[18px] w-[18px] fill-white-main" />
                  Windows
                </Button>
                <div className="text-sm text-gray-500">
                  version is v1.8.1-beta (February 28th, 2025)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BetaPage;
