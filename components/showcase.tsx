"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "Randall Thymes",
    role: "CEO of Plummcorp",
  },
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "Randall Thymes",
    role: "CEO of Plummcorp",
  },
  {
    text: "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    author: "Randall Thymes",
    role: "CEO of Plummcorp",
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
          Devs love PearAI.
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
