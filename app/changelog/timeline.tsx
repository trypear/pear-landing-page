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
    <div className="flex gap-x-3">
      {/* <!-- Left Content --> */}
      <div className="w-28 flex-shrink-0 text-end">
        <span className="text-xs text-gray-500 dark:text-neutral-400">
          {date}
        </span>
      </div>
      {/* <!-- End Left Content --> */}

      {/* <!-- Icon --> */}
      <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-neutral-700">
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
        <div className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {description}
        </div>
        {/* <button
          type="button"
          className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          <img className='shrink-0 h-4 w-4 rounded-full' src='https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80' alt='Avatar'/>
          James Collins
        </button> */}
        <button
          type="button"
          className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          <span className="bg-white flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            A
          </span>
          latest release
        </button>
      </div>
      {/* <!-- End Right Content --> */}
    </div>
  );
}
