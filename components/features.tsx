import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      header: "Talk to your codebase directly",
      description: (
        <>
          To add missing context: directly reference code by including other
          files in the chat by adding &nbsp;
          <b>
            <code>@filename</code>
          </b>
          . <br />
          <br />
          This also works for folders, docs, terminal content, codebase, and
          more 😈
        </>
      ),
      videoSource: "/webms/pearai-@file.webm",
    },

    {
      header: "No more tedious changes,\nor forgetting language\nsyntax",
      description: (
        <>
          Directly make changes inline by pressing{" "}
          <b>
            <code>CMD+I</code>
          </b>
          &nbsp;(<code>CTRL+L</code> on Windows), and choose what you want to
          keep. <br />
          <br /> Here, we ask Pear to help us handle edge cases 😏
        </>
      ),
      videoSource: "/webms/pearai-CMD+I.webm",
    },

    {
      header: "No more tiresome\ncopy pasting.",
      description: (
        <>
          Directly bring your code to the chat by selecting it and
          pressing&nbsp;
          <b>
            <code>CMD+L</code>
          </b>
          &nbsp;(<code>CTRL+L</code> on Windows).
          <br />
          <br /> Prompt it right away 😎
        </>
      ),
      videoSource: "/webms/pearai-CMD+L2.webm",
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
          className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          {props.info.header}
        </h4>
        <br />
        <div
          className="text-md whitespace-pre-line text-gray-600 lg:text-lg"
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
