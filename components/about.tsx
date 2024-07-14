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
    src: "https://www.youtube.com/embed/hHm4mtIp6K0",
    title: "Nang's Latest YouTube video",
    description:
      "Nang introduces PearAI, an AI-powered code editor aimed at transforming software development. He shares his journey from a high-paying job to pursuing startups and YouTube, encouraging viewers to chase their dreams with determination.",
  },
  {
    src: "https://www.youtube.com/embed/Rzk3GmXUySs?si=2Y25oMlhbQWZpu1K",
    title: "Frying Pan's Latest YouTube video",
    description:
      "Pan shows the journey after just starting to build out PearAI. The product is described and a demo is shown. You also get to see a sneak peak into the founders' week, and see the difficulties, the highs and lows we experience, all in NYC.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section className={"mt-32"}>
      <div
        className={
          "m-4 flex flex-col items-center text-center lg:m-0 lg:justify-center"
        }
      >
        <h1 className="text-4xl font-bold">
          Fully{" "}
          <span className="relative">
            <span className="relative z-10 text-primary-700">transparent</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
          , PearAI is built in public
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          PearAI&apos;s goal is to reduce the time it takes for an individual to
          go from idea to creation. Coding itself is a crucial tool in product
          development, and we believe that with the advancement of AI, it may
          drastically change over the coming years. We aim to build the
          environment that will encompass these changes, both in the short-term
          and long-term.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-500">Current features include</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <CardInfo>Codebase context: talk to your code</CardInfo>
          <CardInfo>Built-in PearAI chat</CardInfo>
          <CardInfo>Inline AI prompting and diff changes</CardInfo>
          <CardInfo>AI debugging, including errors shown in terminal</CardInfo>
          <CardInfo>And many more!</CardInfo>
        </div>
      </div>

      <div className="m-auto mt-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="mb-32 mt-0 flex flex-col items-center justify-center p-4 lg:mt-10 lg:p-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Founders</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>

        <div className="max-w-2xl text-gray-500">
          <p className="mt-6 text-center">
            PearAI is founded by Pan and Nang, both former software engineers
            who worked on developer tooling at companies like Meta, Coinbase,
            and high-frequency trading firms.
          </p>
          <p className="mt-6 text-center">
            Passionate about empowering individuals, they recognize code and
            media as the most scalable tools a single person can utilize. With a
            combined following of over 500k subscribers and over 30 million
            views, they&apos;ve decided to combine media and code, bringing the
            developer community along for the ride. They&apos;re building the
            next open-source AI-powered code editor, PearAI, with full
            transparency through videos, livestreams, and direct Discord
            calls/chats.
          </p>
        </div>
      </div>
    </section>
  );
};

const CardInfo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="rounded-3xl bg-primary-50 pb-3 pl-6 pr-6 pt-3 text-center"
      style={{
        border: "1px solid rgba(20, 189, 149, 0.35)",
        background: "rgba(20, 189, 149, 0.03)",
        color: "#0F745C",
      }}
    >
      <p>{children}</p>
    </div>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card className="mb-8">
    <CardContent
      className="flex flex-col-reverse p-4 sm:flex-col"
      style={{
        width: "100%",
        maxWidth: "30rem",
        minHeight: "24rem",
      }}
    >
      <div
        className="relative mt-4 sm:mb-4 sm:mt-0"
        style={{
          paddingBottom: "16rem",
        }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-gray-500">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default AboutComponent;
