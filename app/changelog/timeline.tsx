type TimelineItemProps = {
  date: string;
  title: string;
  description: React.ReactNode;
};

export default function TimelineItem({
  date,
  title,
  description,
}: TimelineItemProps) {
  return (
    <>
      <div className="mb-2 ml-2 mt-6 w-28 md:hidden">
        <span className="text-xs">{date}</span>
      </div>
      <div className="flex gap-x-3">
        {/* <!-- Left Content --> */}
        <div className="hidden w-28 flex-shrink-0 text-end md:block">
          <span className="text-xs">{date}</span>
        </div>
        {/* <!-- End Left Content --> */}

        {/* <!-- Icon --> */}
        <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex h-7 w-7 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>
        {/* <!-- End Icon --> */}

        {/* <!-- Right Content --> */}
        <div className="grow pb-8 pt-0.5">
          <h3 className="dark:text-white flex gap-x-1.5 font-semibold text-gray-800">
            {title}
          </h3>
          <div className="mt-1 text-sm dark:text-neutral-400">
            {description}
          </div>
        </div>
        {/* <!-- End Right Content --> */}
      </div>
    </>
  );
}
