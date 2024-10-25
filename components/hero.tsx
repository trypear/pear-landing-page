"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
                Code with{" "}
                <Link
                  href="/faq#extension"
                  className="text-primary-700 hover:text-primary-700/80"
                >
                  native integrations
                </Link>{" "}
                of top AI tools, curated to boost your productivity.
              </p>
            </div>

            {/* Button */}
            <div className="pt-8">
              <Button asChild>
                <Link href="/pricing">Try For Free</Link>
              </Button>
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
