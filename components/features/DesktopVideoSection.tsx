import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { videoData } from "./data";

export default function DesktopVideoSection() {
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
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 lg:max-w-[1097px]">
      <div className="pb-10 text-center">
        <span className="text-[44px] font-semibold">
          You Can Build Software
        </span>
      </div>
      <div className="flex flex-row items-stretch gap-5">
        {videoData.map((video) => (
          <div
            key={video.id}
            className={`relative flex flex-1 flex-col rounded-xl border-[2.3px] ${
              activeCard === video.id
                ? "border-[#666666] bg-[#F1F1F1]"
                : "border-[#e6e6e6]"
            }`}
          >
            <button
              onClick={() => handleCardClick(video.id)}
              className="flex h-full w-full flex-col p-6 text-left focus:outline-none"
            >
              <div className="flex h-full w-full flex-col justify-between">
                <div>
                  <h3 className="pb-2 text-2xl font-medium">{video.title}</h3>
                  <p className="text-base text-[#666666]">
                    {video.description}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div
                    className={`h-[4px] rounded-full ${activeCard === video.id ? "bg-[#c1c1c1]" : "bg-transparent"}`}
                  >
                    {activeCard === video.id && (
                      <motion.div
                        className="dark:bg-white h-full rounded-full bg-black"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Video container removed to save bandwidth costs */}
    </div>
  );
}
