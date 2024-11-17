import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { videoData } from "./data";

export default function DesktopFeatures() {
  const [activeCard, setActiveCard] = useState(1);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideo = videoData.find((v) => v.id === activeCard);

  const handleCardClick = (id: number) => {
    if (id === activeCard) return;
    setProgress(0);
    setActiveCard(id);
  };

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
    <div className="grid grid-cols-[300px_1fr] gap-8">
      <div className="space-y-4">
        <div className="mb-6 text-[28px] font-semibold">Demos</div>
        <div className="flex flex-col gap-4">
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              initial={false}
              animate={activeCard === video.id ? "expanded" : "collapsed"}
              className={`relative rounded-lg border border-gray-200 transition-all duration-300 ease-in-out dark:border-gray-50 ${
                activeCard === video.id
                  ? "ring-1 ring-black/30 dark:ring-white-50/20"
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
                    {/* Add progress bar */}
                    {activeCard === video.id && (
                      <div className="mt-3 h-[4px] rounded-full bg-gray-200">
                        <motion.div
                          className="dark:bg-white h-full rounded-full bg-primary-600"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
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
              ref={videoRef}
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
  );
}
