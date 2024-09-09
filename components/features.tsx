import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import YoutubeEmbed from "./ui/YoutubeEmbed";

type FeatureInfo = {
  header: string;
  description: React.ReactNode;
  videoSource?: string;
  embedId?: string;
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
          <p className="pb-6">
            Ask questions or generate code with context of your{" "}
            <b>
              <code>@codebase</code>
            </b>{" "}
            for accurate results.
          </p>
          <p>
            This also works with choosing specific folders, online docs,
            terminal content, files, and more 😈.
          </p>
        </>
      ),
      videoSource: "/webms/talktocodebase.webm",
    },

    {
      header: "No more tedious changes.",
      description: (
        <>
          <p>
            PearAI can directly code in your files, and allow you to see diffs.
            Try{" "}
            <b>
              <code>CMD+I</code>
            </b>
            &nbsp;(<code>CTRL+I</code> on Windows).
          </p>
          <p className="pt-6">
            Here, we ask PearAI to help us add error handling and comments 😏.
          </p>
          <p className="pt-6">
            To see all of our features, check out our{" "}
            <Link className="text-primary-600" href="/docs">
              docs
            </Link>
            .
          </p>
        </>
      ),
      videoSource: "/webms/cmd+i-landingpage.webm",
    },

    {
      header: "Common use case example",
      description: (
        <>
          <p className="pb-6">
            Without writing a single line of code, we were able to make a new
            feature in an unfamiliar codebase: adding a documentation page to
            the PearAI landing page.
          </p>
        </>
      ),
      embedId: "v4NN_qadBS0",
    },
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
          className="whitespace-pre-line pb-8 text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          {props.info.header}
        </h4>
        <div
          className="whitespace-pre-line text-base text-gray-600 lg:text-lg"
          data-aos="fade-up"
        >
          {props.info.description}
        </div>
      </div>
      <div className="w-full lg:w-[800px]">
        {props.info.videoSource ? (
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
        ) : (
          <div className="w-full">
            <YoutubeEmbed embedId={props.info.embedId!} />
          </div>
        )}
      </div>
    </div>
  );
}
