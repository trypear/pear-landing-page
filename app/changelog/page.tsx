// import PricingPage from '@/components/pricing';
// import { constructMetadata } from '@/lib/utils';
// import { Metadata } from 'next/types';

import TimelineItem from "./timeline";

// export const metadata: Metadata = constructMetadata({
//   title: 'Pricing',
//   description: 'The pricing for PearAI.',
//   canonical: '/pricing',
// });

export default function ChangeLog() {
  const updates = [
    {
      date: "6th September 2024",
      title: "🌟 v.0.0.2 - Claude Sonnet Model, UI/UX improvements.",
      description: (
        <>
          <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
            <li>New AI Model - Clude 3.5 Sonnet</li>
            <li>GPT Autocompletions</li>
            <li>UI/UX improvements</li>
            <li>Bug Fixes like some extensions not working.</li>
          </ul>
        </>
      ),
    },
    {
      date: "31 September 2024",
      title: "Release v0.0.1 quick bug fix 🐞",
      description: (
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, nam
            ipsum, ab similique ipsam natus voluptas asperiores voluptatem sint
            odio id quia ad tempora ipsa quo voluptatibus, praesentium nostrum.
            Vero, consequatur voluptates, porro itaque veniam aliquid
            perferendis cupiditate suscipit illo totam velit quibusdam debitis
            placeat optio officia recusandae. Dolore, odio.
          </p>
        </>
      ),
    },
    {
      date: "19 July 2024",
      title: "Updates 🌠🌠🌠",
      description: (
        <>
          <p>Just chill for now...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aperiam nam nobis autem, sed rerum vero. Aliquam repellat ipsa porro
            laborum cupiditate harum hic ut saepe quasi soluta quo, consequuntur
            adipisci itaque in provident maiores tenetur voluptates facere iste
            tempora quidem perspiciatis. Consequatur temporibus facere nihil
            excepturi exercitationem possimus vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi fuga
            dignissimos nisi, id magnam accusamus corporis inventore excepturi
            nemo distinctio officiis voluptatum voluptate ut perspiciatis
            pariatur nihil quod optio minima velit, fugit eius? Rem dolorem
            assumenda perspiciatis blanditiis suscipit cumque! Commodi,
            consequatur itaque suscipit omnis nesciunt debitis deleniti sunt at?
          </p>
        </>
      ),
    },
    {
      date: "15 July 2024",
      title: "🚀 Initial Launch v0.0.1",
      description: (
        <>
          <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
            <li>VSCode Fork - feel right at home</li>
            <li>Chat with AI models who have full code context</li>
            <li>tag your files @filename</li>
          </ul>
          <p>Just chill for now...</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="mx-2 border-red-600 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="border-red-600 lg:flex lg:justify-between lg:gap-4">
          <header className="pt-8 overflow-y-hidden border-2 border-none border-red-600 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/6 lg:flex-col lg:justify-between lg:py-32">
            {/* LeftSection */}
            <img src="/images/pearai-color.png" className="mt-32 mx-auto h-60 w-60" />
            {/* <button
              type="button"
              className="dark:text-white mx-8 mt-1 items-center rounded-lg border border-transparent bg-gray-100 p-1 text-xs text-white-300 hover:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <span className="bg-white flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                A
              </span>
              Try Pear AI - Download
            </button> */}
          </header>

          {/* <!-- Right Section (scrollable) --> */}
          <div className="min-h-screen border-2 border-none border-indigo-600 pt-24 lg:w-4/6 lg:py-32">
            <main>
              <div>
                {/* Right Section */}
                {/* <!-- Timeline --> */}
                {updates.map((update, index) => (
                  <TimelineItem key={index} {...update} />
                ))}
                {/* <TimelineItem
                  date="31 September 2024"
                  title="v.0.0.2 - Claude Sonnet Model, UI/UX improvements."
                  description="v.0.0.2 - Claude Sonnet Model, UI/UX improvements."
                />

                <TimelineItem
                  date="31 September 2024"
                  title="Release v5.2.0 quick bug fix 🐞"
                  description=""
                />

                <TimelineItem
                  date="31 September 2024"
                  title="Marked Install Chart completed"
                  description="Finally! You can check it out here."
                />

                <TimelineItem
                  date="31 September 2024"
                  title="Take a break ⛳️"
                  description="Just chill for now... Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Veniam aperiam nam nobis
                      autem, sed rerum vero. Aliquam repellat ipsa porro laborum
                      cupiditate harum hic ut saepe quasi soluta quo,
                      consequuntur adipisci itaque in provident maiores tenetur
                      voluptates facere iste tempora quidem perspiciatis.
                      Consequatur temporibus facere nihil excepturi
                      exercitationem possimus vitae. Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Quasi fuga dignissimos
                      nisi, id magnam accusamus corporis inventore excepturi
                      nemo distinctio officiis voluptatum voluptate ut
                      perspiciatis pariatur nihil quod optio minima velit, fugit
                      eius? Rem dolorem assumenda perspiciatis blanditiis
                      suscipit cumque! Commodi, consequatur itaque suscipit
                      omnis nesciunt debitis deleniti sunt at?"
                /> */}
              </div>
              {/* <!-- End Timeline --> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
