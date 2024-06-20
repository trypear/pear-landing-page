import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeatureInfo {  
  header: string;  
  description: string;  
  imageSource: string;  
}  
interface SingleFeatureProps {  
  info: FeatureInfo;  
}  

export default function Features() {
  const featureInfo = [
    {
      header: "No more switching\nbetween files",
      description: "To add missing context: directly reference code by including other files in the chat by adding '@filename'. \n\n This also works for folders, docs, terminal content, codebase, and more 😈 ",
      imageSource: "/gifs/pearai-@file.gif"
    },


    {
      header: "No more tedious changes,\nor forgetting language\nsyntax",
      description: "Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep. \n\n Here, we ask Pear to help us handle edge cases 😏",
      imageSource: "/gifs/pearai-CMD+I.gif"
    },

    {
      header: "No more tiresome\ncopy pasting.",
      description:"Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows).\n\n Prompt it right away 😎",
      imageSource: "/gifs/pearai-CMD+L2.gif"
    }
  ]



  return (
    <section className="flex flex-col justify-evenly">
      {featureInfo.map((info, index) => (
        <SingleFeature key={index} info={info}/>
      ))}
    </section>
  )
}

function SingleFeature(props: SingleFeatureProps) {
  return (
    <div className="lg:m-24 m-12 flex flex-col items-center lg:max-w-full lg:flex-row lg:justify-center">
      <div className="mb-8 lg:ml-1.5 flex flex-col content-center justify-center lg:w-[450px] lg:mb-0 text-left ">
        <h1
          className="whitespace-pre-line text-xl font-medium text-[#4CC9A7] lg:text-4xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {props.info.header}
        </h1>
        <br />
        <div
          className="whitespace-pre-line text-sm"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {props.info.description}
        </div>
      </div>
      <div className="w-[325px] md:w-[600px] lg:w-[800px]">
        <AspectRatio ratio={3 / 2}>
          <Image
            src={props.info.imageSource}
            alt="Image"
            className="rounded-lg object-cover"
            unoptimized
            fill
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </AspectRatio>
      </div>
    </div>
  );
}