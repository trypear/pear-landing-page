import React from "react";
import { motion } from "framer-motion";

function IntegritionWays() {
  // Animation variant for the sequential glowing effect
  const lineVariants = {
    hidden: {
      opacity: 0.1,
      pathLength: 1,
    },
    visible: (custom: any) => ({
      opacity: [0.1, 0.8, 0.1, 0.5],
      pathLength: 1,
      transition: {
        opacity: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: custom * 1, // Sequential delay between lines
          repeatDelay: 5, // Wait before repeating the animation
        },
        pathLength: {
          duration: 1,
          ease: "easeInOut",
          delay: custom * 0.3,
        },
      },
    }),
  };

  const paths = [
    "M39 543C39 377.918 243 364.44 243 173.01V1.50026",
    "M77 543C77 377.918 344 364.44 344 173.01V1.50026",
    "M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026",
    "M0.5 543C0.5 377.5 140 394 140 173.01V1.5",
  ];

  return (
    <div className="hidden lg:block">
      {/* Background Wavy Lines */}
      <div className="absolute right-[50px] top-5 overflow-hidden opacity-50">
        <motion.svg
          width="450"
          height="500"
          viewBox="0 0 450 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Animated paths */}
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke="#00705A"
              strokeWidth="2"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              filter="url(#glow)"
            />
          ))}
        </motion.svg>
      </div>
    </div>
  );
}

export default IntegritionWays;
