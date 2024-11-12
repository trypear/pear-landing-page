import React from "react";
import IntegritionWays from "./IntegritionWays";
import {
  AiderLogo,
  PerplexityLogo,
  SupermavenLogo,
  Mem0Logo,
  ContinueLogo,
} from "./icons";
import BottomCard from "./BottomCard";

interface IntegrationItemProps {
  label: string;
  product: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  className?: string;
}

const MovingBorder = ({
  BoxName,
  className,
}: {
  BoxName: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative top-5 flex overflow-hidden ${className}`}>
      <div className="relative">
        {BoxName}

        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="animation-delay-1s absolute left-0 top-0 h-px w-full animate-[moveRight_2s_linear_infinite] rounded-lg bg-blue-500" />
          <span className="absolute right-0 top-0 h-full w-px animate-[moveDown_2s_linear_infinite] rounded-lg bg-blue-500 [animation-delay:1.5s]" />
          <span className="absolute bottom-0 right-0 h-px w-full animate-[moveLeft_2s_linear_infinite] rounded-lg bg-blue-500 [animation-delay:1s]" />
          <span className="absolute bottom-0 left-0 h-full w-px animate-[moveUp_2s_linear_infinite] rounded-lg bg-blue-500 [animation-delay:1.5s]" />
        </span>
      </div>

      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes moveDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes moveLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes moveUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
};

const IntegrationItem = ({
  label,
  product,
  Icon,
  className,
}: IntegrationItemProps) => (
  <div className={`relative ${className}`}>
    <MovingBorder
      className={className}
      BoxName={
        <div className="w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800">
          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6" />
            <div className="flex flex-col text-xs">
              <span className="text-gray-500 dark:text-gray-400">{label}</span>
              <span className="dark:text-white font-medium text-black">
                {product}
              </span>
            </div>
          </div>
        </div>
      }
    />
  </div>
);

const INTEGRATIONS = [
  {
    label: "Search with",
    product: "Perplexity",
    Icon: PerplexityLogo,
    className: "flex right-20",
  },
  {
    label: "Remember with",
    product: "MemO",
    Icon: Mem0Logo,
    className: "flex right-[45px]",
  },
  {
    label: "Predict with",
    product: "Supermaven",
    Icon: SupermavenLogo,
    className: "flex right-3",
  },
  {
    label: "Ship with",
    product: "Aider",
    Icon: AiderLogo,
    className: "flex right-2 mt-2",
  },
  {
    label: "Chat with",
    product: "Continue",
    Icon: ContinueLogo,
    className: "flex right-10",
  },
];

export default function IntegrationBox() {
  return (
    <>
      {/* Mobile Display */}
      <div className="block w-full lg:hidden">
        <div className="relative mx-auto max-w-sm">
          {/* Mobile Background Lines */}
          <div className="absolute inset-0 flex scale-110 items-center justify-center">
            <svg
              width="316"
              height="321"
              viewBox="0 0 316 321"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M127.208 321C127.208 236.786 79.3099 185.45 79.3099 87.7948V0.301532M156.099 321C156.099 236.786 156.099 185.45 156.099 87.7948V0.301532M184.99 321C184.99 236.786 237.07 185.45 237.07 87.7948C237.07 -9.85997 237.07 0.301532 237.07 0.301532M213.881 321C213.881 243.969 315 208.692 315 90.7985V0.301532M97.937 321C97.937 236.573 1 200.529 1 87.7947V0.301398"
                stroke="url(#mobile_gradient)"
              />
              <defs>
                <radialGradient
                  id="mobile_gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(166.5 178) rotate(-90.1464) scale(195.73 269.231)"
                >
                  <stop stopColor="currentColor" stopOpacity="0.2" />
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
          <div className="relative flex -translate-y-2 scale-90 flex-col gap-8">
            <div className="flex justify-center">
              <IntegrationItem {...INTEGRATIONS[0]} />
            </div>
            <div className="flex justify-between">
              <IntegrationItem {...INTEGRATIONS[1]} />
              <IntegrationItem {...INTEGRATIONS[2]} />
            </div>
            <div className="flex justify-between">
              <IntegrationItem {...INTEGRATIONS[3]} />
              <IntegrationItem {...INTEGRATIONS[4]} />
            </div>
          </div>

          {/* Mobile Bottom Card */}
          <div className="mt-20 flex w-full translate-y-2 justify-center">
            <div className="w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                  V2
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    11/12 Launch
                  </span>
                  <span className="dark:text-white font-medium text-black">
                    More coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Display */}
      <div className="hidden lg:block">
        <IntegritionWays />
        <div className="absolute right-[10%] top-[10%] flex flex-col gap-8">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}

          <MovingBorder
            className="right-60 mb-4 flex"
            BoxName={
              <BottomCard className="relative flex h-[50px] w-[145px] content-center items-center justify-center gap-2 rounded-lg bg-white-100" />
            }
          />
        </div>
      </div>
    </>
  );
}
