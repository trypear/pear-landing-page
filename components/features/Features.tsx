"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileFeatures = dynamic(() => import("./MobileFeatures"), {
  ssr: false,
});
const DesktopFeatures = dynamic(() => import("./DesktopFeatures"), {
  ssr: false,
});

export default function Features() {
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
    <div className="mx-6">
      <div className="mx-auto w-full max-w-3xl py-6 lg:max-w-[1049px]">
        <div className="bg-white rounded-xl border-2 border-gray-200 p-5 dark:border-gray-50">
          {isMobile ? <MobileFeatures /> : <DesktopFeatures />}
        </div>
      </div>
    </div>
  );
}
