"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative mx-auto mb-14 mt-28 flex min-h-screen w-full flex-col items-center text-center">
        <div className="mb-10 max-w-[1070px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-[44px] font-semibold leading-tight tracking-tight text-black"
          >
            The AI Code Editor for Your Next Project.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-4xl text-lg text-[#666666] sm:text-xl"
          >
            Bring your ideas to life with the best AI code editor, made
            specifically for projects.
            <br />
            Built to supercharge your project development all the way from
            inception to running at scale.
            <br />
            Made for makers of any technical level.
          </motion.p>
        </div>
        <div className="mb-4 w-[140%] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: ["-50%", "0%"] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: { duration: 50, repeat: Infinity, ease: "linear" },
            }}
            className="flex w-[200%]"
          >
            <Image
              src="/images/HeroImageLarge.svg"
              alt="PearAI Hero"
              width={1920}
              height={1080}
              priority
              className="h-auto w-1/2"
            />
            <Image
              src="/images/HeroImageLarge.svg"
              alt="PearAI Hero"
              width={1920}
              height={1080}
              priority
              className="h-auto w-1/2"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 font-mono text-sm text-black"
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
    </>
  );
}
