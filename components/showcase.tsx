"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "If you've ever copy-pasted code into ChatGPT or Claude, download PearAI right now. Just a week ago I told an engineer on the Meta DevX team to check out Pear and see how far behind Meta was. I worked in mostly Hack (PHP), Python, and Javascript at Meta. My current startup requires almost all Swift iOS. PearAI has brought me from complete noob to at least Senior Engineer productivity in Swift iOS in less than a month. Finally, because I use the various LLMs mostly for coding I've canceled my Copilot, Claude, and ChatGPT subscriptions since switching, saving $30+/month.",
    author: "Connor Clancy",
    role: "Founder of Ikio, prev 5 years @ Meta",
  },
  {
    text: "PearAI has transformed my workflow completely - it's like having a senior developer by my side 24/7. Whether I'm implementing AWS file storage or making architectural decisions, the '@codebase' context feature ensures precise solutions. With an amazing community always there for support, I'm shipping projects faster and with better quality. Couldn't recommend it enough for developers looking to boost their productivity.",
    author: "Ricardo Freitas",
    role: "Computer Science Student & Freelancer",
  },
  {
    text: "This tool has been indispensible to me. I'm currently using it in two class projects, one is an app that focuses on mental health with a chatbot that gives advice for social issues. The other is for a class where we are learning about the scrum process and we are building a website for event planning. I'm still learning all the features to become more efficient and develop a workflow, but over one weekend I was able to build 16 screens for the app's UI with working navigation and a few features, like a drawing canvas, and date/time pickers with no prior HTML experience before Friday.",
    author: "Josh Koelker",
    role: "Computer Science Masters Student",
  },
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "Jane Doe",
    role: "CTO of TechCorp",
  },
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "John Smith",
    role: "Lead Developer at InnoSoft",
  },
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "Emily Johnson",
    role: "Product Manager at Future",
  },
];

export default function Showcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  const navigate = (direction: "next" | "previous") => {
    setCurrentPage((prevPage) =>
      direction === "next"
        ? Math.min(prevPage + 1, totalPages - 1)
        : Math.max(prevPage - 1, 0),
    );
  };

  return (
    <div className="flex items-center justify-center px-6 py-4">
      <div className="max-w-3xl rounded-xl border-2 border-gray-200 p-5 dark:border-gray-50 lg:max-w-[1049px]">
        <h1 className="mb-5 text-[28px] font-semibold dark:text-gray-900">
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
  );
}
