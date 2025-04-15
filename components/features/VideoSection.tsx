"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileVideoSection = dynamic(() => import("./MobileVideoSection"), {
  ssr: false,
});
const DesktopVideoSection = dynamic(() => import("./DesktopVideoSection"), {
  ssr: false,
});

export default function VideoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1049);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="mx-6 mb-14">
      <div className="mx-auto w-full max-w-3xl lg:max-w-[1049px]">
        {isMobile ? <MobileVideoSection /> : <DesktopVideoSection />}
      </div>
    </div>
  );
}
