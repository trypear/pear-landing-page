"use client";

import Link from "next/link";
import Footer from "@/components/footer";
import CTA from "./cta";
import { Button } from "./ui/button";

const FAQComponent: React.FC = () => {
  return (
    <>
      <div className="w-full px-6">
        <section className="mx-auto mb-[68px] mt-[122px] flex max-w-[1049px] flex-col">
          <div className="mb-16 flex flex-col gap-5">
            <h2 className="text-[44px] font-semibold text-black">
              Download PearAI Beta Version
            </h2>
            <p className="text-xl text-[#666666]">
              Try out the latest beta version of PearAI and let us know what you
              think in{" "}
              <Link
                className="underline"
                target="_blank"
                href="https://discord.gg/AKy5FmqCkF"
              >
                Discord
              </Link>
              .
            </p>
          </div>

          <div className="flex w-full gap-6">
            <div className="flex w-full flex-col items-center space-y-2">
              <Button
                className="w-full bg-black px-3 py-2 font-semibold text-white-50 hover:bg-black/80"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/drive/folders/1kQjtQkg8fScj-pFvVdUT1X9Bky41Kkl_?usp=sharing")
                }
              >
                MacOS (Silicon)
              </Button>
              <div className="text-sm text-[#666666]">
                v1.8.7-beta (April 9th, 2025)
              </div>
            </div>

            <div className="flex w-full flex-col items-center space-y-2">
              <Button
                className="w-full bg-black px-3 py-2 font-semibold text-white-50 hover:bg-black/80"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/drive/folders/1n74VC3FWArMf6Td9sf0wEVzb1jMBpim_?usp=drive_link")
                }
              >
                Windows
              </Button>
              <div className="text-sm text-[#666666]">
                v1.8.7-beta (April 9th, 2025)
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default FAQComponent;
