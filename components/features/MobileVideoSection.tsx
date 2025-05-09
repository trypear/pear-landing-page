"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { videoData } from "./data";

export default function MobileVideoSection() {
  const [progressMap, setProgressMap] = useState<Record<number, number>>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  useEffect(() => {
    const durations: Record<number, number> = {};
    const startTimes: Record<number, number> = {};
    const animationFrames: Record<number, number> = {};

    const animate = (videoId: number) => (currentTime: number) => {
      if (!startTimes[videoId]) startTimes[videoId] = currentTime;
      const elapsedTime = currentTime - startTimes[videoId];
      const progress = Math.min(
        (elapsedTime / (durations[videoId] || 5000)) * 100,
        100,
      );

      setProgressMap((prev) => ({ ...prev, [videoId]: progress }));

      if (progress < 100) {
        animationFrames[videoId] = requestAnimationFrame(animate(videoId));
      } else {
        // Reset progress when video loops
        startTimes[videoId] = currentTime;
        setProgressMap((prev) => ({ ...prev, [videoId]: 0 }));
        animationFrames[videoId] = requestAnimationFrame(animate(videoId));
      }
    };

    // Start all videos simultaneously
    const startTime = performance.now();
    videoData.forEach((video) => {
      durations[video.id] = video.duration || 5000;
      startTimes[video.id] = startTime;
      animationFrames[video.id] = requestAnimationFrame(animate(video.id));
    });

    return () => {
      Object.values(animationFrames).forEach((frame) => {
        if (frame) cancelAnimationFrame(frame);
      });
    };
  }, []);

  return (
    <>
      <div className="space-y-8">
        <span className="mx-auto flex max-w-md px-6 text-center text-4xl font-medium">
          You Can Just Build Software
        </span>

        <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

        {videoData.map((video, index) => (
          <div key={video.id}>
            <div className="mx-auto max-w-3xl px-6 lg:max-w-[1049px] lg:p-6">
              <div className="pb-5">
                <h3 className="pb-2 text-2xl font-medium">{video.title}</h3>
                <p className="pb-4 text-[#666666]">{video.description}</p>
                <div className="h-[4px] rounded-full bg-[#c1c1c1]">
                  <motion.div
                    className="dark:bg-white h-full rounded-full bg-black"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progressMap[video.id] || 0}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="relative aspect-[16/12] w-full overflow-hidden rounded-lg">
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[video.id] = el;
                    }}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    autoPlay
                    loop
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                </motion.div>
              </div>
            </div>
            {index < videoData.length - 1 && (
              <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
