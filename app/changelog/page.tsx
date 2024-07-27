// import PricingPage from '@/components/pricing';
// import { constructMetadata } from '@/lib/utils';
// import { Metadata } from 'next/types';

// export const metadata: Metadata = constructMetadata({
//   title: 'Pricing',
//   description: 'The pricing for PearAI.',
//   canonical: '/pricing',
// });

export default function ChangeLog() {
  return (
    <>
      <div className="mx-8 border-red-600 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="border-red-600 lg:flex lg:justify-between lg:gap-4">
          <header className="overflow-y-hidden border-2 border-solid border-red-600 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            LeftSection
          </header>

          {/* <!-- Right Section (scrollable) --> */}
          <div className="min-h-screen border-2 border-none border-indigo-600 pt-24 lg:w-1/2 lg:py-24">
            <main>
              Right Section
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-neutral-400">
                      12:05PM
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
                      <svg
                        className="mt-1 h-4 w-4 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" x2="8" y1="13" y2="13"></line>
                        <line x1="16" x2="8" y1="17" y2="17"></line>
                        <line x1="10" x2="8" y1="9" y2="9"></line>
                      </svg>
                      Created Preline in React task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      Find more detailed insctructions here.
                    </p>
                    <button
                      type="button"
                      className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      {/* <img className='shrink-0 size-4 rounded-full' src='https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80' alt='Avatar'> */}
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-neutral-400">
                      31 September 2024
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
                      Release v5.2.0 quick bug fix 🐞
                    </h3>
                    <button
                      type="button"
                      className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      <span className="bg-white flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-neutral-400">
                      12:05PM
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
                      Marked Install Chart completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      Finally! You can check it out here.
                    </p>
                    <button
                      type="button"
                      className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      <img
                        className="h-4 w-4 shrink-0 rounded-full"
                        src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="ml-6 w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-neutral-400">
                      12:05PM
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
                      Take a break ⛳️
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      Just chill for now... 😉 Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Adipisci, non! Praesentium
                      sit, doloremque natus adipisci quae velit repudiandae
                      magni, corrupti optio ab nihil, explicabo perspiciatis.
                      Dignissimos doloremque quos repudiandae distinctio vel ab
                      iure totam et accusamus, harum minima est, autem hic ex
                      error! Debitis quo beatae nisi nam adipisci alias
                      perferendis esse corporis, facere explicabo error? Fuga,
                      illo placeat.Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Deserunt explicabo ab corrupti impedit
                      incidunt, iure quae repellat sunt maxime hic veritatis
                      voluptatem possimus aperiam adipisci odio, quis delectus
                      eveniet distinctio aut? Ratione facilis provident tempore
                      natus, qui, sequi, in perferendis sed reiciendis odio iure
                      itaque nobis iusto labore est delectus.
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
