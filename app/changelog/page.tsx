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
      date: "31 September 2024",
      title: "v.0.0.2 - Claude Sonnet Model, UI/UX improvements.",
      description: "v.0.0.2 - Claude Sonnet Model, UI/UX improvements.",
    },
    {
      date: "31 September 2024",
      title: "Release v5.2.0 quick bug fix 🐞",
      description: "",
    },
    {
      date: "31 September 2024",
      title: "Marked Install Chart completed",
      description: "Finally! You can check it out here.",
    },
    {
      date: "31 September 2024",
      title: "Take a break ⛳️",
      description: (
        <>
          <ul className="list-disc">
            <li>new updates</li>
            <li>interesting updates</li>
            <li>bug fixes</li>
          </ul>
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
  ];

  return (
    <>
      <div className="mx-8 border-red-600 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="border-red-600 lg:flex lg:justify-between lg:gap-4">
          <header className="overflow-y-hidden border-2 border-solid border-red-600 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/6 lg:flex-col lg:justify-between lg:py-24">
            LeftSection
          </header>

          {/* <!-- Right Section (scrollable) --> */}
          <div className="min-h-screen border-2 border-none border-indigo-600 pt-24 lg:w-4/6 lg:py-24">
            <main>
              Right Section
              {/* <!-- Timeline --> */}
              {updates.map((update, index) => (
                <TimelineItem key={index} {...update} />
              ))}
              <div>
                <TimelineItem
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
                />
              </div>
              {/* <!-- End Timeline --> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
