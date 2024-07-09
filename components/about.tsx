import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

type VideoData = {
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = VideoData;

const videoData: VideoData[] = [
  {
    src: "https://www.youtube.com/embed/ZCzz3UXDazY",
    title: "FryingPan's Latest YouTube video",
    description:
      "FryingPan discusses the evolution from a creator-brand connection idea to PearAI, an open-source AI-powered code editor. He highlights how this tool aims to revolutionize developer efficiency.",
  },
  {
    src: "https://www.youtube.com/embed/hHm4mtIp6K0",
    title: "Nang's Latest YouTube video",
    description:
      "Nang introduces PearAI, an AI-powered code editor aimed at transforming software development. He shares his journey from a high-paying job to pursuing startups and YouTube, encouraging viewers to chase their dreams.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section
      className="to-white bg-gradient-to-b from-gray-50 px-4 py-12 pt-20 dark:bg-none"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left column */}
          <div className="lg:w-1/2 lg:pr-8 lg:pt-4">
            <h2 className="mb-4 text-3xl font-bold dark:text-gray-300">
              Fully{" "}
              <span className="text-primary-700">
                transparent
              </span>
              , PearAI is built in public
            </h2>
            <p className="mb-4 text-secondary-400 dark:text-gray-400">
              PearAI&apos;s goal is to reduce the time it takes for an
              individual to go from idea to creation. Coding itself is a crucial
              tool in product development, and we believe that with the
              advancement of AI, it may drastically change over the coming
              years. We aim to build the environment that will encompass these
              changes, both in the short-term and long-term.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              Current features include:
            </h3>
            <ul className="mb-8 list-inside list-disc text-secondary-400 dark:text-gray-400">
              <li>Codebase context: talk to your code</li>
              <li>Built-in PearAI chat</li>
              <li>Inline AI prompting and diff changes</li>
              <li>AI debugging, including errors shown in terminal</li>
              <li>And many more!</li>
            </ul>

            {/* First video card for mobile */}
            <div className="mb-8 lg:hidden">
              <VideoCard {...videoData[0]} />
            </div>

            <h2 className="mb-4 text-2xl font-bold dark:text-gray-300">
              Founders
            </h2>
            <div className="space-y-4 text-secondary-400 dark:text-gray-400">
              <p>
                PearAI is founded by Pan and Nang, both former software
                engineers who worked on developer tooling at companies like
                Meta, Coinbase, and high-frequency trading firms.
              </p>
              <p>
                Passionate about empowering individuals, they recognize code and
                media as the most scalable tools a single person can utilize.
                With a combined following of over 500k subscribers and over 30
                million views, they&apos;ve decided to combine media and code,
                bringing the developer community along for the ride.
                They&apos;re building the next open-source AI-powered code
                editor, PearAI, with full transparency through videos,
                livestreams, and direct Discord calls/chats.
              </p>
            </div>
          </div>

          {/* Video column */}
          <div className="lg:w-1/2">
            {/* Mobile: Second video */}
            <div className="mt-8 lg:hidden">
              <VideoCard {...videoData[1]} />
            </div>

            {/* Desktop: Both videos */}
            <div className="hidden lg:block">
              {videoData.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card className="mb-8">
    <CardContent className="flex flex-col-reverse p-4 sm:flex-col">
      <div className="relative mt-4 pb-[56.25%] sm:mb-4 sm:mt-0">
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-lg text-secondary-400 dark:text-gray-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default AboutComponent;
