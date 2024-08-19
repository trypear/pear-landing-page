import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  version,
  screenshot,
}) => {
  return (
    <article className="mb-8">
      <div className="flex gap-x-3">
        {/* <!-- Left Content --> */}
        <div className="hidden w-28 flex-shrink-0 text-end md:block">
          <span className="text-xs font-medium text-primary-800 dark:text-primary-600">
            {version}
          </span>
          <time dateTime={date} className="mt-1 block text-xs">
            {date}
          </time>
        </div>
        {/* <!-- Icon --> */}
        <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex h-6 w-7 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-neutral-600"></div>
          </div>
        </div>
        {/* <!-- Right Content --> */}
        <div className="grow">
          <div className="mb-2 md:hidden">
            <span className="text-xs font-medium text-primary-800 dark:text-primary-600">
              {version}
            </span>
            <time dateTime={date} className="ml-2 text-xs">
              {date}
            </time>
          </div>
          <div className={cn("justify-between gap-10 md:flex")}>
            <div>
              <h3 className="dark:text-white mb-2 flex items-baseline gap-x-1.5 text-lg font-semibold text-gray-900 md:text-xl">
                {title}
              </h3>
              <div className="mb-4 text-sm text-gray-800 dark:text-neutral-400">
                {description}
              </div>
            </div>
            {screenshot && (
              <div className="md:ml-auto">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
