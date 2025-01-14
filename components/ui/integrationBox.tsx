import {
  AiderLogo,
  PerplexityLogo,
  SupermavenLogo,
  Mem0Logo,
  ContinueLogo,
} from "./icons";

interface IntegrationItemProps {
  margin: string;
  label: string;
  product: string | JSX.Element;
  Icon: React.FC<React.ComponentProps<"svg">>;
}

const IntegrationItem = ({
  margin,
  label,
  product,
  Icon,
}: IntegrationItemProps) => (
  <div
    className={`bg-white-50 dark:bg-gray-800 ${margin} w-fit rounded-lg border border-gray-200 px-3 py-2 dark:border-black/50`}
  >
    <div className="flex items-center gap-2">
      <Icon className="h-8 w-8" />
      <div className="flex flex-col text-xs">
        <span className="text-gray-400 dark:text-gray-500">{label}</span>
        <span className="dark:text-white font-medium text-black/60">
          {product}
          <sup>*</sup>
        </span>
      </div>
    </div>
  </div>
);

const INTEGRATIONS = [
  {
    margin: "lg:ml-2 mr-1",
    label: "Ship with",
    product: (
      <a
        href="https://aider.chat/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        aider
      </a>
    ),
    Icon: AiderLogo,
  },
  {
    margin: "lg:ml-24 ml-2",
    label: "Predict with",
    product: (
      <a
        href="https://supermaven.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Supermaven
      </a>
    ),
    Icon: SupermavenLogo,
  },
  {
    margin: "lg:ml-44",
    label: "Remember with",
    product: (
      <a
        href="https://mem0.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        MemO
      </a>
    ),
    Icon: Mem0Logo,
  },
  {
    margin: "lg:ml-56 -ml-3",
    label: "Search with",
    product: (
      <a
        href="https://www.perplexity.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Perplexity
      </a>
    ),
    Icon: PerplexityLogo,
  },
  {
    margin: "lg:ml-48 -mr-5 lg:mr-0",
    label: "Chat & edit with",
    product: (
      <a
        href="https://www.continue.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Continue
      </a>
    ),
    Icon: ContinueLogo,
  },
];

export default function IntegrationBox() {
  return (
    <>
      {/* Large Display */}
      <div className="hidden lg:block">
        {/* Background Wavy Lines */}
        <div className="absolute right-24 top-14 scale-y-105 opacity-30">
          <svg
            width="554"
            height="543"
            viewBox="0 0 554 543"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 543C39 377.918 243 364.44 243 173.01V1.50026M77 543C77 377.918 344 364.44 344 173.01V1.50026M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026M153 543C153 392 553 410 553 178.898V1.50026M0.5 543C0.5 377.5 140 394 140 173.01V1.5"
              stroke="url(#large_display_gradient)"
            />
            <defs>
              <radialGradient
                id="large_display_gradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(265 285.5) rotate(126.959) scale(192.1 87.2532)"
              >
                <stop stopColor="currentColor" stopOpacity="0.2" />
                <stop
                  stopColor="currentColor"
                  offset="0.893735"
                  stopOpacity="0.5"
                />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Integration Cards */}
        <div className="absolute right-56 top-24 flex flex-col gap-10">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}

          {/* Bottom Card */}
          <div
            className={`-ml-[78px] mt-16 w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                V1
              </div>
              <div className="flex flex-col text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  11/12 Launch
                </span>
                <span className="dark:text-white font-medium text-black/60">
                  More coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

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

            {/* Bottom Card */}
          </div>
          <div className="mt-20 flex w-full translate-y-2 justify-center">
            <div className="w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                  V1
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    11/12 Launch
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
    </>
  );
}
