import React from "react";
import {
  AiderLogo,
  PerplexityLogo,
  SupermavenLogo,
  Mem0Logo,
  ContinueLogo,
} from "./icons";

interface IntegrationItemProps {
  marginLeft: string;
  mobileMarginLeft: string;
  label: string;
  product: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
}

const IntegrationItem = ({
  marginLeft,
  mobileMarginLeft,
  label,
  product,
  Icon,
}: IntegrationItemProps) => (
  <div
    className={`bg-white-50 dark:bg-gray-800 ${mobileMarginLeft} ${marginLeft} w-fit rounded-lg border border-gray-200 px-3 py-2 dark:border-black/50`}
  >
    <div className="flex items-center gap-2">
      <Icon className="h-6 w-6" />
      <div className="flex flex-col text-xs">
        <span className="text-gray-400 dark:text-gray-500">{label}</span>
        <span className="dark:text-white font-medium text-black/60">
          {product}
        </span>
      </div>
    </div>
  </div>
);

const INTEGRATIONS = [
  {
    marginLeft: "lg:ml-2",
    mobileMarginLeft: "-ml-1",
    label: "Ship with",
    product: "Aider",
    Icon: AiderLogo,
  },
  {
    marginLeft: "lg:ml-24",
    mobileMarginLeft: "ml-14",
    label: "Predict with",
    product: "Supermaven",
    Icon: SupermavenLogo,
  },
  {
    marginLeft: "lg:ml-44",
    mobileMarginLeft: "ml-36",
    label: "Remember with",
    product: "MemO",
    Icon: Mem0Logo,
  },
  {
    marginLeft: "lg:ml-56",
    mobileMarginLeft: "ml-60",
    label: "Search with",
    product: "Perplexity",
    Icon: PerplexityLogo,
  },
  {
    marginLeft: "lg:ml-48",
    mobileMarginLeft: "ml-80",
    label: "Chat with",
    product: "Continue",
    Icon: ContinueLogo,
  },
];

export default function IntegrationBox() {
  return (
    <>
      {/* Mobile Display */}
      <div className="mt-20 block w-full lg:hidden">
        <div className="relative mx-auto max-w-md">
          {/* Mobile Background Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="300"
              height="291"
              viewBox="0 0 300 291"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M120.777 291C120.777 214.657 75.3196 205.48 75.3196 116.951V0.273559M148.196 291C148.196 214.657 148.196 205.48 148.196 116.951V0.273559M175.615 291C175.615 214.657 225.041 205.48 225.041 116.951C225.041 28.4231 225.041 0.273559 225.041 0.273559M203.034 291C203.034 221.169 299 223.826 299 116.951V0.273559M92.9975 291C92.9975 214.463 1 219.15 1 116.951V0.273438"
                stroke="url(#mobile_gradient)"
              />
              <defs>
                <radialGradient
                  id="mobile_gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(158.067 161.365) rotate(-68.0976) scale(151.284 217.851)"
                >
                  <stop stopColor="currentColor" stopOpacity="0.3" />
                  <stop
                    offset="0.893735"
                    stopColor="currentColor"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Integration Cards */}
          <div className="relative flex flex-col gap-4">
            {INTEGRATIONS.map((integration, index) => (
              <IntegrationItem key={index} {...integration} />
            ))}

            {/* Bottom Card */}
            <div className="ml-[138px] w-fit translate-y-8 rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                  V2
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    10 days until launch
                  </span>
                  <span className="dark:text-white font-medium text-black/60">
                    More coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LargeDisplay */}
      <div className="hidden lg:block">
        {/* Background Wavy Lines */}
        <div className="absolute right-24 top-16 scale-y-105 opacity-30">
          <svg
            width="554"
            height="543"
            viewBox="0 0 554 543"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 543C39 377.918 243 364.44 243 173.01V1.50026M77 543C77 377.918 344 364.44 344 173.01V1.50026M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026M153 543C153 392 553 410 553 178.898V1.50026M0.5 543C0.5 377.5 140 394 140 173.01V1.5"
              stroke="gray"
            />
          </svg>
        </div>

        {/* Integration Cards */}
        <div className="absolute right-56 top-24 flex flex-col gap-10">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}

          {/* Bottom Card */}
          <div
            className={`-ml-[82px] mt-16 w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                V2
              </div>
              <div className="flex flex-col text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  10 days until launch
                </span>
                <span className="dark:text-white font-medium text-black/60">
                  More coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
