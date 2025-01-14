import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AiderLogo,
  PerplexityLogo,
  SupermavenLogo,
  Mem0Logo,
  ContinueLogo,
} from "./icons";

type Card = {
  id: number;
  title: string;
  company: {
    name: string;
    url: string;
  };
  description: string | JSX.Element;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  titleColor: string;
  descriptionColor: string;
};

const CARDS: Card[] = [
  {
    id: 1,
    title: "Ship with",
    company: {
      name: "aider",
      url: "https://aider.chat/",
    },
    description:
      "Aider is a popular CLI tool that generates code for you. Ask for a new feature, a refactor, or to fix a bug. Integrated within PearAI Creator, it will make and apply the changes to your files automatically.",
    icon: AiderLogo,
    bgColor: "rgba(201, 255, 226, 1)",
    iconBgColor: "rgba(4, 40, 26, 1)",
    iconColor: "#01FFC9",
    titleColor: "#0A3F37",
    descriptionColor: "#0A3F37",
  },
  {
    id: 2,
    title: "Ship with",
    company: {
      name: "Supermaven",
      url: "https://supermaven.com/",
    },
    description:
      "Supermaven is currently the fastest code autocomplete tool available. Supermaven comes independently pre-packaged and recommended within PearAI.",
    icon: SupermavenLogo,
    bgColor: "rgba(200, 230, 255, 1)",
    iconBgColor: "rgba(0, 85, 255, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#002957",
    descriptionColor: "#002957",
  },
  {
    id: 3,
    title: "Chat & edit with",
    company: {
      name: "Continue",
      url: "https://www.continue.dev/",
    },
    description: (
      <>
        Continue is a leading open-source AI code assistant extension. PearAI
        Chat is built upon the foundation of Continue, with changes and a
        unified user experience. We acknowledge and respect Continue&apos;s
        contributions.
      </>
    ),
    icon: ContinueLogo,
    bgColor: "rgba(229, 225, 248, 1)",
    iconBgColor: "rgba(255, 255, 255, 1)",
    iconColor: "#000000",
    titleColor: "#110D67",
    descriptionColor: "#110D67",
  },
  {
    id: 4,
    title: "Remember with",
    company: {
      name: "Mem0",
      url: "https://mem0.ai/",
    },
    description:
      "Mem0 is a self-improving memory layer for LLM applications. It is integrated into PearAI to make coding with AI an enhanced, personalized experience.",
    icon: Mem0Logo,
    bgColor: "rgba(225, 253, 175, 1)",
    iconBgColor: "rgba(0, 0, 0, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#005F15",
    descriptionColor: "#005F15",
  },
  {
    id: 5,
    title: "Search with",
    company: {
      name: "Perplexity",
      url: "https://www.perplexity.ai/",
    },
    description:
      "Perplexity is the leading AI search engine. Integrated within PearAI Search, you can seamlessly add web content, like up-to-date documentation, which vanilla LLMs often lack, directly into your requests.",
    icon: PerplexityLogo,
    bgColor: "rgba(216, 250, 255, 1)",
    iconBgColor: "rgba(34, 128, 141, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#003F48",
    descriptionColor: "#003F48",
  },
];

const ANIMATION_DURATION = 0.3;
const ANIMATION_DELAY = 0.2;

export default function ExpandableCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCardWidth = (cardId: number) =>
    expandedId === null
      ? "w-[185px]"
      : expandedId === cardId
        ? "w-[380px]"
        : "w-[185px]";

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden items-center justify-center px-6 py-4 lg:flex">
        <div className="w-full max-w-[1049px] rounded-xl border-2 border-gray-200 p-5 dark:border-gray-50">
          <h1 className="pb-5 text-[28px] font-semibold leading-tight dark:text-gray-900">
            The AI space changes fast- PearAI Inventory curates the best AI
            tools on the market at any given time, and integrates them into a
            powerful editor.
          </h1>
          <div className="flex gap-5">
            {CARDS.map((card) => (
              <motion.div
                key={card.id}
                style={{
                  backgroundColor: card.bgColor,
                }}
                className={cn(
                  "relative h-44 cursor-pointer overflow-hidden rounded-xl",
                  getCardWidth(card.id),
                )}
                layout
                onClick={() => handleCardClick(card.id)}
                transition={{ duration: ANIMATION_DURATION }}
              >
                <div className="relative flex h-full flex-col justify-between p-4">
                  <motion.div
                    layout
                    style={{ backgroundColor: card.titleColor }}
                    className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full opacity-50"
                    transition={{ duration: ANIMATION_DURATION }}
                  >
                    <Plus
                      style={{ color: card.bgColor }}
                      className={cn(
                        "h-4 w-4 stroke-[3.4] transition-transform duration-300",
                        expandedId === card.id && "rotate-45",
                      )}
                    />
                  </motion.div>

                  {expandedId !== card.id ? (
                    <>
                      <motion.div
                        layout="position"
                        className="flex h-full flex-col justify-between"
                      >
                        <div
                          style={{
                            backgroundColor: card.iconBgColor,
                          }}
                          className="flex h-16 w-16 items-center justify-center rounded-2xl"
                        >
                          <card.icon
                            className="h-10 w-10"
                            color={card.iconColor}
                          />
                        </div>
                        <h1
                          style={{
                            color: card.titleColor,
                          }}
                          className="whitespace-pre-line text-xl font-[550] leading-6"
                        >
                          {card.title}
                          <br />
                          <span>{card.company.name}</span>
                          <span className="opacity-50">*</span>
                        </h1>
                      </motion.div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: ANIMATION_DELAY }}
                      className="flex h-full flex-col"
                    >
                      <div
                        style={{
                          color: card.titleColor,
                        }}
                        className="mb-3 text-xl font-[550] leading-6"
                      >
                        {card.title}{" "}
                        <a
                          href={card.company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {" "}
                          {card.company.name}
                        </a>
                      </div>
                      <p
                        style={{
                          color: card.descriptionColor,
                        }}
                        className="whitespace-pre-line text-sm"
                      >
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block w-full px-6 py-6 lg:hidden">
        <div className="mx-auto w-full max-w-3xl rounded-xl border-2 border-gray-200 px-5 py-5 dark:border-gray-50">
          <h2 className="mb-5 text-2xl font-semibold dark:text-gray-900 md:text-[28px]">
            The AI space changes fast— PearAI Inventory curates the best AI
            tools on the market at any given time, and integrates them into a
            powerful editor.
          </h2>
          <div className="space-y-4">
            {CARDS.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundColor: card.bgColor,
                }}
                className="overflow-hidden rounded-xl border border-gray-200 transition-all duration-200 dark:border-gray-700 dark:bg-opacity-90"
                onClick={() => handleCardClick(card.id)}
              >
                <div className="px-4 py-4">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        style={{
                          backgroundColor: card.iconBgColor,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                      >
                        <card.icon className="h-8 w-8" color={card.iconColor} />
                      </div>
                      <div
                        style={{ color: card.titleColor }}
                        className="text-base font-semibold sm:text-lg"
                      >
                        {card.title}{" "}
                        {expandedId === card.id ? (
                          <a
                            href={card.company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {card.company.name}
                          </a>
                        ) : (
                          <span>{card.company.name}</span>
                        )}
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: card.titleColor }}
                      className="flex h-5 w-5 items-center justify-center rounded-full opacity-40"
                    >
                      <Plus
                        style={{ color: card.bgColor }}
                        className={cn(
                          "h-4 w-4 stroke-[3.4] transition-transform duration-300",
                          expandedId === card.id && "rotate-45",
                        )}
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "max-h-0 overflow-hidden whitespace-pre-line transition-all duration-300",
                      expandedId === card.id && "max-h-[200px] pt-4",
                    )}
                  >
                    <p
                      style={{ color: card.descriptionColor }}
                      className="ml-16 text-sm sm:text-base"
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
