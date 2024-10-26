"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GridIllustration from "./ui/grid-illustration";
import { HeaderBadge } from "./ui/header-badge";

export default function Hero() {
  return (
    <section className="relative">
      <motion.div
        className="absolute inset-0 mx-auto max-w-[100rem] bg-dot-light-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-dot-dark-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="absolute inset-0 h-64 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <GridIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {/* Title */}
          <div className="relative mx-auto flex flex-col items-center pb-24 pt-24 text-center">
            <HeaderBadge />
            <div className="justify-center text-4xl font-bold sm:text-6xl">
              <p className="bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-400">
                The Open Source AI
              </p>
              <p className="bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-400">
                Code Editor
              </p>
            </div>

            {/* Description */}
            <div className="mx-6 mt-6 max-w-xl">
              <p className="text-sm text-gray-500/90 sm:text-lg">
                Accelerate your development by blending the familiarity of VS
                Code with native integrations of top AI tools, curated to boost
                productivity.
              </p>
            </div>

            {/* Button */}
            <div className="pt-6 sm:pt-8">
              <Link href="/pricing">
                <motion.button
                  className="button-radial-gradient relative rounded-full px-4 py-1.5 sm:px-6 sm:py-2"
                  initial={{ "--x": "100%", scale: 1 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    delay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                >
                  <span className="button-linear-mask relative h-full w-full text-xs font-medium tracking-wide text-neutral-100 sm:text-base">
                    Try For Free
                  </span>
                  <span className="button-linear-overlay absolute inset-0 block rounded-full p-[2px]" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 -z-10 h-64 w-full scale-y-[-1] transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <GridIllustration />
        </motion.div>
      </div>
    </section>
  );
}
