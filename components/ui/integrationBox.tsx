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
  label: string;
  product: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
}

const IntegrationItem = ({
  marginLeft,
  label,
  product,
  Icon,
}: IntegrationItemProps) => (
  <div
    className={`bg-white-50 dark:bg-gray-800 ${marginLeft} w-fit rounded-lg border border-gray-200 px-3 py-2 dark:border-black/50`}
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
    marginLeft: "ml-0",
    label: "Search with",
    product: "Perplexity",
    Icon: PerplexityLogo,
  },
  {
    marginLeft: "ml-24",
    label: "Remember with",
    product: "MemO",
    Icon: Mem0Logo,
  },
  {
    marginLeft: "ml-48",
    label: "Predict with",
    product: "Supermaven",
    Icon: SupermavenLogo,
  },
  {
    marginLeft: "ml-60",
    label: "Ship with",
    product: "Aider",
    Icon: AiderLogo,
  },
  {
    marginLeft: "ml-48",
    label: "Chat with",
    product: "Continue",
    Icon: ContinueLogo,
  },
];

export default function IntegrationBox() {
  return (
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
          className={`-ml-[87px] mt-16 w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800`}
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
  );
}
