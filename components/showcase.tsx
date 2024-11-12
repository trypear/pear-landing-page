"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const testimonials = [
  {
    text: "If you've ever copy-pasted code into ChatGPT or Claude, download PearAI right now. Just a week ago I told an engineer on the Meta DevX team to check out Pear and see how far behind Meta was. I worked in mostly Hack (PHP), Python, and Javascript at Meta. My current startup requires almost all Swift iOS. PearAI has brought me from complete noob to at least Senior Engineer productivity in Swift iOS in less than a month. Finally, because I use the various LLMs mostly for coding I've canceled my Copilot, Claude, and ChatGPT subscriptions since switching, saving $30+/month.",
    author: "Connor Clancy",
    role: "Founder of Taste, prev 5 years @ Meta",
  },
  {
    text: "PearAI is literally a lifesaver for my CS projects. It helps me figure stuff out when I'm stuck and makes study sessions way more productive. Instead of spending hours lost in documentation, I can actually get things done and understand what I'm learning. Definitely a must-have.",
    author: "Pedro Vieira",
    role: "College Computer Science Student",
  },
];

export default function Showcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [totalPages, setTotalPages] = useState(3);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      setTotalPages(
        isMobileView ? testimonials.length : Math.ceil(testimonials.length / 2),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigate = (direction: "next" | "previous") => {
    setCurrentPage((prevPage) =>
      direction === "next"
        ? Math.min(prevPage + 1, totalPages - 1)
        : Math.max(prevPage - 1, 0),
    );
  };

  return (
    <>
      {/* Testimonials */}
      <div className="flex items-center justify-center px-6 py-4">
        <div className="z-10 max-w-3xl rounded-xl border-2 border-gray-200 bg-white-50 p-5 dark:border-gray-50 dark:bg-black lg:max-w-[1049px]">
          <h1 className="mb-5 text-2xl font-semibold dark:text-gray-900 md:text-[28px]">
            PearAI loves Devs... almost as much as Devs love PearAI!
          </h1>

          <div className="relative overflow-hidden pb-5">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 gap-5 lg:grid-cols-3"
              >
                {testimonials
                  .slice(currentPage * 3, (currentPage + 1) * 3)
                  .map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex h-full flex-col justify-between rounded-lg border border-gray-200 p-5 transition-colors dark:border-gray-50"
                    >
                      <p className="mb-4 text-base font-medium leading-tight text-black dark:text-gray-600">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <ChevronRight
              className="h-4 w-4 rotate-180 cursor-pointer stroke-[2.5] text-foreground opacity-100"
              onClick={() => navigate("previous")}
            />

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === currentPage
                      ? "bg-black dark:bg-gray-900"
                      : "bg-black/30 dark:bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <ChevronRight
              className="h-4 w-4 cursor-pointer stroke-[2.5] text-foreground opacity-100"
              onClick={() => navigate("next")}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="showcase-gradient-light relative mx-auto flex min-h-[100vh] w-full max-w-full -translate-y-24 items-center justify-center sm:min-h-[120vh]">
        <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center">
          <p className="max-w-xl text-4xl font-semibold text-black sm:text-6xl">
            Try PearAI for free.
          </p>
          <p className="mt-4 max-w-md text-xl font-semibold text-black sm:text-3xl">
            Our Foundation is VSCode, with all of your favourite features.
          </p>
          <Button className="mt-10 bg-black px-16 py-4 text-sm hover:bg-black sm:text-base">
            <Link href="/pricing">Download</Link>
          </Button>
          <a
            href="https://github.com/peardotai/pearai"
            className="mt-2 text-xs font-medium text-black underline decoration-dashed underline-offset-2 hover:text-gray-900"
          >
            Interested in contributing?
          </a>
        </div>
      </div>
    </>
  );
}
