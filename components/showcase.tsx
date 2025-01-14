"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const testimonials = [
  {
    text: "If you've ever copy-pasted code into ChatGPT or Claude, download PearAI right now. Just a week ago I told an engineer on the Meta DevX team to check out Pear and see how far behind Meta was. I worked in mostly Hack (PHP), Python, and Javascript at Meta. My current startup requires almost all Swift iOS. PearAI has brought me from complete noob to at least Senior Engineer productivity in Swift iOS in less than a month. Finally, because I use the various LLMs mostly for coding I've canceled my Copilot, Claude, and ChatGPT subscriptions since switching, saving $30+/month.",
    author: "Connor Clancy",
    role: "Founder of Taste, prev 5 years @ Meta",
  },
  {
    text: "PearAI has been a great help with my side projects and learning new programming languages. What sets it apart from standard AI chat tools is its ability to understand my codebase and file context, making the development process more streamlined. It's a useful tool for developers who want contextual AI assistance while coding. I wish my company adopted an AI code editor like this.",
    author: "Jackson Z",
    role: "Big Tech Software Engineer, Prev. Tesla AI",
  },
  {
    text: "PearAI has transformed my workflow completely - it's like having a senior developer by my side 24/7. Whether I'm implementing AWS file storage or making architectural decisions, the '@codebase' context feature ensures precise solutions. With an amazing community always there for support, I'm shipping projects faster and with better quality. Couldn't recommend it enough for developers looking to boost their productivity.",
    author: "Ricardo Freitas",
    role: "Computer Science Student & Freelancer",
  },
  {
    text: "This tool has been indispensible to me. I'm currently using it in two class projects, one is an app that focuses on mental health with a chatbot that gives advice for social issues. The other is for a class where we are learning about the scrum process and we are building a website for event planning. I'm still learning all the features to become more efficient and develop a workflow, but over one weekend I was able to build 16 screens for the app's UI with working navigation and a few features, like a drawing canvas, and date/time pickers with no prior HTML experience before Friday.",
    author: "Josh Koelker",
    role: "Information Systems Masters Student",
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
      const newTotalPages = isMobileView
        ? testimonials.length
        : Math.ceil(testimonials.length / 2);
      setTotalPages(newTotalPages);

      setCurrentPage((prev) => Math.min(prev, newTotalPages - 1));
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
            Devs love PearAI... almost as much as PearAI loves Devs!
          </h1>

          <div className="relative overflow-hidden pb-5">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 gap-5 lg:grid-cols-2"
              >
                {testimonials
                  .slice(
                    currentPage * (isMobile ? 1 : 2),
                    (currentPage + 1) * (isMobile ? 1 : 2),
                  )
                  .map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex h-full flex-col justify-between rounded-lg border border-gray-200 p-5 transition-colors dark:border-gray-50"
                    >
                      <p className="mb-4 text-sm font-[450] text-black/60 dark:text-gray-500 sm:text-base">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <p className="text-sm font-semibold sm:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500 sm:text-sm">
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
      <div className="showcase-gradient-light relative mx-auto flex min-h-[80vh] w-full max-w-full -translate-y-24 items-center justify-center sm:min-h-[120vh]">
        <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center">
          <p className="max-w-xl text-4xl font-semibold text-black sm:text-6xl">
            Try PearAI for free.
          </p>
          <p className="mt-4 max-w-md text-xl font-semibold text-black sm:text-3xl">
            Built on top of{" "}
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger className="underline decoration-dotted">
                  VSCode
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-sm">
                  <p className="max-w-xs text-sm font-normal">
                    PearAI is a fork of VSCode, allowing you to retain
                    familiarity of functionalities. We provide a one-click
                    transition to port all your VSCode settings automatically.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            for a seamless transition.
          </p>
          <Button className="mt-10 bg-black px-20 py-4 text-sm hover:bg-black dark:hover:bg-black sm:text-base">
            <Link href="/pricing">Download</Link>
          </Button>
          <a
            href="https://trypear.ai/docs/contributors"
            className="mt-2 text-xs font-medium text-black underline decoration-dashed underline-offset-1 hover:decoration-black/20 dark:text-black"
          >
            Interested in contributing ?
          </a>
        </div>
      </div>

      <p className="mt-10 px-4 text-center text-sm text-gray-500">
        * For more information about how integrations are built into PearAI, see{" "}
        <Link
          href="/disclaimer"
          className="text-primary-700 underline hover:text-primary-800"
        >
          here
        </Link>
        .
      </p>
    </>
  );
}
