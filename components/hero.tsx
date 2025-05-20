"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <section className="relative mx-auto mb-0 mt-28 flex w-full flex-col items-center text-center lg:mb-14">
        <div className="mb-10 max-w-[1070px] px-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-[44px] font-medium leading-tight tracking-tight text-black"
          >
            The AI Code Editor for Your Next Project.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-4xl text-base font-normal text-[#666666] md:flex md:flex-col md:text-xl"
          >
            <span>Bring your ideas to life with the best AI code editor. </span>
          </motion.p>
        </div>

        <div className="mb-4 w-[140%] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: ["-60%", "0%"] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: {
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex w-[140%]"
          >
            <Image
              src="/images/HeroImageLarge.svg"
              alt="PearAI Hero"
              width={1920}
              height={1080}
              priority
            />
            <Image
              src="/images/HeroImageLarge.svg"
              alt="PearAI Hero"
              width={1920}
              height={1080}
              priority
            />
            <Image
              src="/images/HeroImageLarge.svg"
              alt="PearAI Hero"
              width={1920}
              height={1080}
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden items-center gap-2 font-mono text-sm text-black lg:flex"
        >
          <span>BACKED BY</span>
          <Image
            src="/icons/YCLogo.svg"
            alt="Y Combinator Logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span>COMBINATOR</span>
          <div className="pb-[1px]">
            <ChevronRight className="h-4 w-4 stroke-[1.5px] text-[#666666]" />
          </div>
        </motion.div>
      </section>
      <div className="relative my-[30px] block h-3 w-screen bg-[#F4F4F4] lg:hidden"></div>
    </>
  );
}
