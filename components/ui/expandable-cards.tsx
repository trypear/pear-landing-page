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
  description: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  bgColor: string;
  darkBgColor: string;
  iconBgColor: string;
  darkIconBgColor: string;
  iconColor: string;
  titleColor: string;
  darkTitleColor: string;
  descriptionColor: string;
  darkDescriptionColor: string;
};

const CARDS: Card[] = [
  {
    id: 1,
    title: "Ship with\nAider",
    description:
      "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    icon: AiderLogo,
    bgColor: "rgba(201, 255, 226, 1)",
    darkBgColor: "rgba(181, 235, 205, 1)",
    iconBgColor: "rgba(4, 40, 26, 1)",
    darkIconBgColor: "rgba(4, 40, 26, 1)",
    iconColor: "#01FFC9",
    titleColor: "#0A3F37",
    darkTitleColor: "#0A3F37",
    descriptionColor: "#0A3F37",
    darkDescriptionColor: "#0A3F37",
  },
  {
    id: 2,
    title: "Predict with\nSupermaven",
    description:
      "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    icon: SupermavenLogo,
    bgColor: "rgba(200, 230, 255, 1)",
    darkBgColor: "rgba(200, 230, 255, 1)",
    iconBgColor: "rgba(0, 85, 255, 1)",
    darkIconBgColor: "rgba(0, 85, 255, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#002957",
    darkTitleColor: "#002957",
    descriptionColor: "#002957",
    darkDescriptionColor: "#002957",
  },
  {
    id: 3,
    title: "Chat & edit\nwith Continue",
    description:
      "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    icon: ContinueLogo,
    bgColor: "rgba(229, 225, 248, 1)",
    darkBgColor: "rgba(229, 225, 248, 1)",
    iconBgColor: "rgba(255, 255, 255, 1)",
    darkIconBgColor: "rgba(255, 255, 255, 1)",
    iconColor: "#000000",
    titleColor: "#110D67",
    darkTitleColor: "#110D67",
    descriptionColor: "#110D67",
    darkDescriptionColor: "#110D67",
  },
  {
    id: 4,
    title: "Remember\nwith Mem0",
    description:
      "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    icon: Mem0Logo,
    bgColor: "rgba(225, 253, 175, 1)",
    darkBgColor: "rgba(225, 253, 175, 1)",
    iconBgColor: "rgba(0, 0, 0, 1)",
    darkIconBgColor: "rgba(0, 0, 0, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#005F15",
    darkTitleColor: "#005F15",
    descriptionColor: "#005F15",
    darkDescriptionColor: "#005F15",
  },
  {
    id: 5,
    title: "Search with\nPerplexity",
    description:
      "Look, if you had one shot or one opportunity To seize everything you ever wanted in one moment Would you capture it or just let it slip?",
    icon: PerplexityLogo,
    bgColor: "rgba(216, 250, 255, 1)",
    darkBgColor: "rgba(216, 250, 255, 1)",
    iconBgColor: "rgba(34, 128, 141, 1)",
    darkIconBgColor: "rgba(34, 128, 141, 1)",
    iconColor: "#FFFFFF",
    titleColor: "#003F48",
    darkTitleColor: "#003F48",
    descriptionColor: "#003F48",
    darkDescriptionColor: "#003F48",
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
      ? "w-[180px]"
      : expandedId === cardId
        ? "w-[380px]"
        : "w-[180px]";

  return (
    <div className="mt-24 flex items-center justify-center p-4">
      <div className="rounded-xl border-2 border-gray-200 px-5 py-6 dark:border-gray-50">
        <h1 className="mb-6 text-[27px] font-semibold leading-tight dark:text-gray-900">
          The AI space changes fast- PearAI Inventory curates the best AI tools
          on
          <br />
          the market at any given time, and integrates them into a powerful
          editor.
        </h1>
        <div className="flex w-[964px] space-x-4">
          {CARDS.map((card) => (
            <motion.div
              key={card.id}
              style={
                {
                  "--bg-color": card.bgColor,
                  "--dark-bg-color": card.darkBgColor,
                } as React.CSSProperties
              }
              className={cn(
                "relative h-44 cursor-pointer overflow-hidden rounded-xl bg-[var(--bg-color)] shadow-md dark:bg-[var(--dark-bg-color)]",
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
                          backgroundColor: `var(--icon-bg-color, ${card.iconBgColor})`,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl dark:[--icon-bg-color:var(--dark-icon-bg-color)]"
                      >
                        <card.icon
                          className="h-10 w-10"
                          color={card.iconColor}
                        />
                      </div>
                      <h1
                        style={
                          {
                            "--title-color": card.titleColor,
                            "--dark-title-color": card.darkTitleColor,
                          } as React.CSSProperties
                        }
                        className="whitespace-pre-line text-xl font-[550] leading-6 text-[var(--title-color)] dark:text-[var(--dark-title-color)]"
                      >
                        {card.title}
                      </h1>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: ANIMATION_DELAY }}
                    className="flex h-full items-center"
                  >
                    <p
                      style={
                        {
                          "--description-color": card.descriptionColor,
                          "--dark-description-color": card.darkDescriptionColor,
                        } as React.CSSProperties
                      }
                      className="text-sm text-[var(--description-color)] dark:text-[var(--dark-description-color)]"
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
  );
}
