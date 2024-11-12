"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { BUNNY_CDN_HOST } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";

const videoData = [
  {
    id: 1,
    title: "Talk to your codebase directly",
    description:
      "Ask questions or generate code with the context of your @codebase for more accurate results.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-chat-welcome.mp4`,
    duration: 8500,
  },
  {
    id: 2,
    title: "No more tedious changes",
    description:
      "Inline code changes in your files with diffs. Here, PearAI Chat (powered by Continue*) adds print statements to help with debugging.",
    videoUrl: `${BUNNY_CDN_HOST}/PearAI-CMD+I.mp4`,
    duration: 12500,
  },
  {
    id: 3,
    title: "Make features, refactors, or bug fixes directly.",
    description:
      "PearAI Creator (powered by aider*) finds where the changes need to be made, and implements them automatically.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-creator-welcome.mp4`,
    duration: 10500,
  },
  {
    id: 4,
    title: "Always have up-to-date information",
    description:
      "PearAI Search (Powered by Perplexity*) uses web data to provide you up-to-date info, going beyond traditional AI's knowledge cutoff limitations.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-search.mp4`,
    duration: 6500,
  },
];

export default function Features() {
  const [activeCard, setActiveCard] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleCardClick = (id: number) => {
    if (id === activeCard) return;
    setProgress(0);
    setActiveCard(id);
  };

  const currentVideo = videoData.find((v) => v.id === activeCard);

  useEffect(() => {
    const duration = currentVideo?.duration || 5000;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(progress);

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setActiveCard((prev) => {
          const nextCard = prev + 1;
          return nextCard > videoData.length ? 1 : nextCard;
        });
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [activeCard, currentVideo?.duration]);

  return (
    <div className="mx-auto w-full max-w-[1097px] px-6 py-6">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 dark:border-gray-50">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="space-y-4">
            <div className="mb-6 text-2xl font-semibold">Demos</div>
            <div className="flex flex-col gap-4">
              {videoData.map((video) => (
                <motion.div
                  key={video.id}
                  initial={false}
                  animate={activeCard === video.id ? "expanded" : "collapsed"}
                  className={`relative rounded-lg border border-gray-200 transition-all duration-300 ease-in-out dark:border-gray-50 ${
                    activeCard === video.id
                      ? "ring-2 ring-black dark:ring-white-50/70"
                      : ""
                  } overflow-hidden`}
                >
                  <div className="relative">
                    <button
                      onClick={() => handleCardClick(video.id)}
                      className="w-full p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-medium">{video.title}</h3>
                        <motion.div
                          variants={{
                            expanded: { rotate: 180 },
                            collapsed: { rotate: 0 },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeCard === video.id ? "auto" : "0px",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: activeCard === video.id ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.2,
                            delay: activeCard === video.id ? 0.1 : 0,
                          }}
                          className="text-xs text-black/60 dark:text-gray-500"
                        >
                          {video.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                  {activeCard === video.id && (
                    <div className="absolute inset-x-0 bottom-0 h-[4px] bg-gray-200">
                      <motion.div
                        className="dark:bg-white h-full rounded-full bg-black dark:bg-white-50"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[16/12] w-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <video
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={currentVideo?.videoUrl} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
