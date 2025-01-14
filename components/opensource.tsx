// components/opensource/index.tsx
import { BUNNY_CDN_HOST } from "@/utils/constants";
import { Check } from "lucide-react";
import Image from "next/image";

export default function OpenSource() {
  return (
    <div className="mx-6">
      <section className="relative mx-auto flex max-w-3xl overflow-hidden rounded-xl border-2 border-gray-200 py-6 dark:border-gray-50 lg:max-w-[1049px]">
        <div className="absolute inset-0">
          <Image
            src={`${BUNNY_CDN_HOST}/opensource-bg.png`}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl py-4 text-center">
            <h2 className="mb-2 text-4xl font-bold text-black md:text-4xl">
              Open source is{" "}
              <span className="font-bold text-white-50 drop-shadow-[0_0_5px_rgba(64,203,160,255)]">
                transparency.
              </span>
            </h2>
            <div className="flex flex-col items-center space-y-2">
              <div></div>
              <div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-black">
                    See every line on our public repos.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-black">We never store your code.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-left text-black">
                    Zero Data Retention policy with Anthropic.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-black">Self-host server for enterprise.</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
