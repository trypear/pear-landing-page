import Image from "next/image";
import background from "../public/images/export1.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#EEF0F1]">
      <div className="relative flex h-screen flex-col items-center justify-center bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={background}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-90"
          />
        </div>

        {/* Hero Section */}
        <div className="z-10 -mt-10 mb-4 text-center">
          <p className="mx-auto w-[200px] rounded-md bg-gray-100 text-sm text-gray-900">
            Product Insights + Monitoring
          </p>
          <h1 className="mt-4 text-5xl font-medium tracking-tighter text-black dark:text-black">
            <span className="text-primary-700">PearAI:</span> The Open Source AI{" "}
          </h1>
          <h1 className="mt-1 text-[45px] font-medium tracking-tighter text-black dark:text-black">
            Powered Code Editor
          </h1>
          <p className="mx-auto mt-2 text-sm text-gray-800 dark:text-black">
            Speed up your development by integrating AI the correct way. <br />
            Afraid of switching editors? No need, PearAI is a fork of VS Code,
            so you’ll feel right at home.
          </p>
        </div>
        <button className="z-10 flex w-[140px] items-center justify-center rounded-3xl border border-primary-700 p-2 text-center">
          <Link href="/pricing" className="flex items-center gap-5">
            <p className="text-primary-700">Launch</p>
            <ArrowRight
              size={24}
              color="white"
              className="rounded-full bg-primary-700"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
