import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tweet } from "@/components/tweet";
import { components } from "./ui/my-tweet";
import { Badge } from "./ui/badge";
import Footer from "./footer";

type VideoData = {
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = VideoData;

const videoData: VideoData[] = [
  {
    src: "https://www.youtube.com/embed/Rzk3GmXUySs?si=2Y25oMlhbQWZpu1K",
    title: "Frying Pan's Latest YouTube video",
    description:
      "Pan shows the journey after just starting to build out PearAI. The product is described and a demo is shown. You also get to see a sneak peak into the founders' week, and see the difficulties, the highs and lows we experience, all in NYC.",
  },
  {
    src: "https://www.youtube.com/embed/hHm4mtIp6K0",
    title: "Nang's Latest YouTube video",
    description:
      "Nang introduces PearAI, an AI-powered code editor aimed at transforming software development. He shares his journey from a high-paying job to pursuing startups and YouTube, encouraging viewers to chase their dreams with determination.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section className={"mt-36"}>
      <div
        className={
          "m-4 mt-0 flex flex-col items-center text-center lg:m-0 lg:justify-center"
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
          go from idea to creation. We started out as a fork of VSCode, with
          Continue being our first integrated AI tool.
          <br /> <br />
          We aim to be a curated inventory of the best AI tools on the market
          (ie. Perplexity, aider, mem0, etc.), to make it easy for you to make
          what you want.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-700">Current features include</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Codebase context: talk to your code
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Built-in PearAI chat
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Inline AI prompting and diff changes
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            AI debugging, including errors from terminal
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Inventory: seamless integration with the best AI tools on the
            market.
          </Badge>
        </div>
      </div>

      <div className="m-auto mb-8 flex max-w-4xl items-center justify-center px-4">
        <Tweet id="1825456010862956844" components={components} />
      </div>

      <div className="m-auto mb-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="mt-0 flex flex-col items-center justify-center p-4 pb-0">
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
            PearAI is founded by Pan and Nang, both software engineers who
            worked on internal and developer tooling teams at companies like
            Meta, Coinbase, Two Sigma, among others.
          </p>
          <p className="mt-3 text-center">
            Passionate about empowering individuals, they recognize code and
            media as the most scalable tools a single person can utilize. With a
            combined following of over 500k subscribers and over 30 million
            views, they&apos;ve decided to combine media and code, bringing the
            developer community along for the ride, through videos, livestreams,
            and direct Discord calls/chats.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card>
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
