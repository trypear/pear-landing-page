"use client";

import { useState } from "react";
import { XMarkIcon } from "./ui/icons";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex justify-between bg-slate-800 p-3 text-sm text-slate-50 shadow-lg md:rounded">
            <div className="inline-flex text-slate-500">
              <a
                className="font-medium text-slate-50 hover:underline"
                href="https://github.com/cruip/open-react-template"
                target="_blank"
                rel="noreferrer"
              >
                Download<span className="hidden sm:inline"> on GitHub</span>
              </a>{" "}
              <span className="px-1.5 italic">or</span>{" "}
              <a
                className="font-medium text-emerald-400 hover:underline"
                href="https://cruip.com/open-pro/"
                target="_blank"
                rel="noreferrer"
              >
                Check Premium Version
              </a>
            </div>
            <button
              className="ml-3 border-l border-gray-700 pl-2 text-slate-500 hover:text-slate-400"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-4 w-4 shrink-0" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
