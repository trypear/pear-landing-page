import React from "react";
import { motion } from "framer-motion";

export const HeaderBadge = () => {
  return (
    <a
      href="https://www.ycombinator.com/companies/pearai"
      target="__blank"
      rel="noopener noreferrer"
      className="group relative mb-4 inline-block cursor-pointer rounded-full bg-white-50 text-xs font-medium leading-6 text-black no-underline shadow-xl shadow-primary-1000 dark:bg-slate-900 dark:text-white-100/80"
    >
      <div className="relative z-10 flex items-center rounded-full bg-primary-700/10 py-0 pl-2.5 pr-1 ring-1 ring-primary-500/80 dark:bg-primary-1000 dark:ring-primary-900/90 sm:py-0.5 sm:pl-4 sm:pr-2">
        <span>
          Backed by
          <span className="pl-2 text-[#f26625]">YCombinator</span>{" "}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </svg>
      </div>
      <span className="absolute left-[1.125rem] z-10 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary-900/10 via-primary-900 to-primary-900/10 duration-500 group-hover:opacity-40 dark:from-primary-300/10 dark:via-primary-500 dark:to-primary-300/10"></span>
    </a>
  );
};
