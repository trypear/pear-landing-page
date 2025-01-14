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
    src: "https://www.youtube.com/embed/qtGPQ5AKnm4?si=WZxlmB0kENB_WGiI",
    title: "Frying Pan's Latest YouTube video",
    description:
      "Demo of the new PearAI Inventory, a quick-access overlay for all AI tools. In this video, PearAI Creator and Search are shown.",
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
          PearAI is{" "}
          <span className="relative">
            <span className="relative z-10 text-primary-700">
              built in public
            </span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
          , and we&apos;re just getting started.
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          PearAI&apos;s mission is to reduce the time it takes for you to go
          from idea to creation. The first time you may have seen us, you saw
          our MVP. Today, here’s our V1, and how we’re building for the future
          of coding with AI.
          <br /> <br />
          We are a curated inventory of the best AI tools on the market (ie.
          Perplexity, aider, mem0, etc.), to make it easy for you to make what
          you want. Imagine if VSCode was reimagined with AI in mind since the
          beginning, or an extensible AI code editor with the best UX possible.
          View our future plans below!
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-700">Current features include</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            PearAI Inventory: Best AI tools integrated into one UX
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            PearAI Chat: Talk to your code
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            PearAI Creator: Automatic code generation
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            PearAI Search: Up-to-date AI search
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Inline AI prompting and diff changes
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            AI debugging, including errors from terminal
          </Badge>
        </div>
      </div>

      <div className="m-auto mb-8 flex max-w-4xl items-center justify-center px-4">
        <Tweet id="1856441845880107408" components={components} />
      </div>

      <div className="m-auto mb-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Community</span>
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
            PearAI is fueled by its most important thing, the community. Join
            our Discord with +2000 developers and friends all trying to create
            the best AI code editor in the world together.
          </p>
        </div>
      </div>
      <br />

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
            Meta, Coinbase, Two Sigma, among others. Together, they have over
            500k subscribers on Youtube.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">The Future</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          Currently, we have hit a checkpoint in our product, where layers of
          the tech stack (i.e. Search, RAG, Chat, etc.) can communicate with
          each other under a single, beautiful user experience our users love.
          This is our V1, and we’re just getting started. Building for the
          future, we envision PearAI as a framework for all AI tools to live and
          integrate. Not only will the number of layers of the AI tech stack
          grow, but the number of companies solving each layer of this AI tech
          stack. As a result, the quality of each product for every part of
          coding with AI will improve. The best user experience can be achieved
          if these AI tools have a framework to communicate with each other, and
          users have access to these AI tools in a single, unified IDE. This
          will be PearAI.
        </p>
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
        className="group relative mt-4 sm:mb-4 sm:mt-0"
        style={{
          paddingBottom: "16rem",
        }}
      >
        <iframe
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded group-hover:pointer-events-auto"
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
