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
        <div
          className={`w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800`}
        >
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
  );
}
