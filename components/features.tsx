import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

type FeatureInfo = {
  header: string;
  description: React.ReactNode;
  videoSource: string;
};
type SingleFeatureProps = {
  info: FeatureInfo;
};

export default function Features() {
  const featureInfo = [
    {
      header: "Talk to your codebase directly.",
      description: (
        <>
          Ask questions or generate code with context of your{" "}
          <b>
            <code>@codebase</code>
          </b>{" "}
          for accurate results. <br />
          <br />
          This also works with choosing specific folders, online docs, terminal
          content, files, and more 😈.
        </>
      ),
      videoSource: "/webms/talktocodebase.webm",
    },

    {
      header: "No more tedious changes.",
      description: (
        <>
          PearAI can directly code in your files, and allow you to see diffs.
          Try{" "}
          <b>
            <code>CMD+I</code>
          </b>
          &nbsp;(<code>CTRL+I</code> on Windows). <br />
          <br /> Here, we ask PearAI to help us add error handling and comments
          😏.
          <br />
          <br /> To see all of our features, check out our{" "}
          <Link className="text-primary-600" href="/docs/core-features">
            docs
          </Link>
          .
        </>
      ),
      videoSource: "/webms/cmd+i-landingpage.webm",
    },

    // {
    //   header: "No more tiresome\ncopy pasting.",
    //   description: (
    //     <>
    //       Directly bring your code to the chat by selecting it and
    //       pressing&nbsp;
    //       <b>
    //         <code>CMD+L</code>
    //       </b>
    //       &nbsp;(<code>CTRL+L</code> on Windows).
    //       <br />
    //       <br /> Prompt it right away 😎
    //     </>
    //   ),
    //   videoSource: "/webms/pearai-CMD+L2.webm",
    // },
  ];

  return (
    <section className="flex flex-col justify-evenly">
      {featureInfo.map((info, index) => (
        <SingleFeature key={index} info={info} />
      ))}
    </section>
  );
}

function SingleFeature(props: SingleFeatureProps) {
  return (
    <div className="m-4 flex flex-col items-center gap-6 min-[425px]:m-8 min-[425px]:items-start sm:m-12 lg:m-24 lg:max-w-full lg:flex-row lg:justify-center lg:gap-28">
      <div className="mb-6 flex w-full flex-col text-center lg:mb-0 lg:ml-1.5 lg:w-[450px] lg:text-left">
        <h4
          className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          {props.info.header}
        </h4>
        <br />
        <div
          className="whitespace-pre-line text-base text-gray-600 lg:text-lg"
          data-aos="fade-up"
        >
          {props.info.description}
        </div>
      </div>
      <div className="w-full lg:w-[800px]">
        <AspectRatio ratio={3 / 2}>
          <video
            autoPlay
            loop
            muted
            controls
            playsInline
            className="h-full w-full rounded-lg object-cover"
            data-aos="fade-up"
          >
            <source src={props.info.videoSource} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      </div>
    </div>
  );
}
