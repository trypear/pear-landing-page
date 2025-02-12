import { BUNNY_CDN_HOST } from "@/utils/constants";
import { Check } from "lucide-react";
import Image from "next/image";

export default function OpenSource() {
  return (
    <div className="mx-6">
      <section className="relative mx-auto flex max-w-3xl overflow-hidden rounded-xl border-2 border-gray-200 py-6 dark:border-gray-50 lg:max-w-[1049px]">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl py-4 text-center">
            <h2 className="mb-2 text-4xl font-bold text-black dark:text-gray-900 md:text-4xl">
              Open source is{" "}
              <>
                <svg width="0" height="0" style={{ position: "absolute" }}>
                  <defs>
                    <filter
                      id="inner-shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                      </feComponentTransfer>
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feOffset dx="0" dy="0" result="offsetBlur" />
                      <feComposite
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                        in="offsetBlur"
                        in2="SourceAlpha"
                        result="innerShadow"
                      />
                      <feFlood floodColor="white" result="floodColor" />
                      <feComposite
                        in="floodColor"
                        in2="innerShadow"
                        operator="in"
                        result="whiteInnerShadow"
                      />
                      <feComposite
                        in="whiteInnerShadow"
                        in2="SourceGraphic"
                        operator="over"
                      />
                    </filter>
                  </defs>
                </svg>
                <span
                  className="bg-gradient-to-r from-[#FF34A1] via-[#754AE9] to-[#00FFC3] bg-clip-text text-transparent"
                  style={{ filter: "url(#inner-shadow)" }}
                >
                  transparency.
                </span>
              </>
            </h2>
            <div className="flex flex-col items-center space-y-2">
              <div></div>
              <div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-gray-300" />
                  <p className="text-black dark:text-gray-900">
                    See every line on our public repos.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-gray-300" />
                  <p className="text-black dark:text-gray-900">
                    We never store your code.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-gray-300" />
                  <p className="text-left text-black dark:text-gray-900">
                    Zero Data Retention policy with Anthropic.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-gray-300" />
                  <p className="text-black dark:text-gray-900">
                    Self-host server for enterprise.
                  </p>
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
