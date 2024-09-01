import { PricingTierData } from "@/types/pricing";
import { FAQItem } from "@/types/faqItems";
import {
  DiscordLogo,
  GitHubLogo,
  LinkedInLogo,
  TwitterLogo,
} from "@/components/ui/icons";

export const TEST_MODE_ENABLED = ["true", "True", "TRUE"].includes(
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED ?? "",
);

export const CONTACT_EMAIL = "pear@trypear.ai";

const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID = "price_1PZ9X608N4O93LU5yqMbGDtu";
const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID_TEST =
  "price_1PZUT208N4O93LU5jItKoEYu";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID = "price_1PoZiZ08N4O93LU5kCrdrXvI";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID_TEST =
  "price_1Ppa9408N4O93LU5irNxLp5p";
const NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID = "price_1PpZUO08N4O93LU5FYFUyh43";
const NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID_TEST =
  "price_1PZUSi08N4O93LU5UVdlkfp2";

export const STRIPE_PRICE_IDS = {
  WAITLIST: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID,
  MONTHLY: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID,
  ANNUAL: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID,
};

export const PRICING_TIERS: {
  standard: PricingTierData[];
  enterprise: PricingTierData[];
} = {
  standard: [
    {
      title: "Intern",
      price: "0",
      description:
        "You can download PearAI directly, and use our free trial, or your own API key 🤓",
      isFree: true,
      index: 0,
      features: [
        "Use our free trial, your own API key, or local models",
        "Community Discord server",
      ],
    },
    {
      title: "Junior Engineer",
      price: "15",
      prevPrice: "18",
      description:
        "Get the monthly subscription, and we'll take care of you. 😎",
      features: [
        "1000 chat requests per month (Claude 3.5 Sonnet + GPT4o)",
        "Direct customer support by the founders and contributors",
        "Private Discord channel",
      ],
      buttonText: "Get Started",
      priceId: STRIPE_PRICE_IDS.MONTHLY,
      index: 1,
    },
    {
      title: "10x Engineer",
      price: "10",
      prevPrice: "14",
      description:
        "Pay one lump sum yearly, and you'll be treated like our VIP! 🤩",
      features: [
        "Everything from monthly",
        "Zero data retention from Anthropic",
        "Priority for new feature requests",
      ],
      buttonText: "Get Started",
      priceId: STRIPE_PRICE_IDS.ANNUAL,
      index: 2,
    },
  ],
  enterprise: [
    {
      title: "Monthly",
      price: "32",
      prevPrice: "35",
      description:
        "Get the best deal for your business and increase the productivity of your team.",
      features: [
        "1000 chat requests per month (Claude 3.5 Sonnet + GPT4o)",
        "Direct customer support by the founders and contributors",
        "Zero data retention from Anthropic",
        "Centralized Billing and Dashboard",
        "Private Discord Channel",
      ],
      buttonText: "Get Started",
      priceId: STRIPE_PRICE_IDS.MONTHLY,
      index: 0,
    },
    {
      title: "Yearly",
      price: "27",
      prevPrice: "30",
      description: "Pay one lump sum yearly for our highest priority tier.",
      features: ["Everything from monthly", "Priority Customer Support"],
      buttonText: "Get Started",
      priceId: STRIPE_PRICE_IDS.ANNUAL,
      index: 1,
    },
  ],
};

export const faqData: FAQItem[] = [
  {
    question: "Why is it called PearAI?",
    answer:
      "Pair programming... Pear Programming... Cupertino... AI... PearAI! ",
  },
  {
    question:
      "What separates PearAI from Github Copilot and other competitors?",
    answer:
      "PearAI offers significant advantages over competitors in both AI capabilities and user experience: \n\nAI Model Flexibility: Unlike Copilot, which is limited to OpenAI's models, PearAI leverages the most advanced AI models available, currently featuring Claude Sonnet 3.5. This flexibility allows us to always use the best-performing model for coding tasks. \n\nEnhanced Codebase Context: Using RAG (Retrieval Augmented Generation), PearAI has knowledge of your entire codebase, making answers and suggestions more relevant and useful for you! \n\nUI/UX Focus: As a complete IDE rather than just an extension, PearAI provides a more integrated and refined coding environment. This allows for smoother workflows and more intuitive interactions with AI assistance.\n\nOpen-Source: PearAI is fully transparent and open-source, which means anyone can see, review, and contribute all of our code! This allows for a community-driven product, and mitigates privacy concerns that other similar tools face.",
  },
  {
    question: "Why should I switch to PearAI?",
    answer: `PearAI will speed up and improve your development. PearAI is a fork of VSCode, and possess all of its functionalities, but also adds more to it by integrating AI functionalities to speed up your coding workflow. Current users have expressed that their coding workflow accelerated by at least 3-4x.\n\n By switching to PearAI, you can speed up your product development, and not lack behind in terms of AI tooling compared to your peers.`,
  },
  {
    question:
      "Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
    answer:
      "With PearAI, you don't need copy-paste code or switch tabs anymore, as AI is integreated into the code editor for a seamless experience. Also, PearAI provides better responses than vanilla LLM's by having context of your codebase achieved through RAG (Retrieval Augemented Generation).  Try it out yourself - we're sure you'll love it!",
  },
  {
    question: "Is PearAI an extension or an app?",
    answer:
      "PearAI is a full-fledged app. Being an app instead of being just an extension provides us the highest degree of freedom to ensure the best, smoothest experience for you!",
  },
  {
    question: "Does PearAI store my code?",
    answer:
      "No. PearAI does not store your code. All codebase indexing is done and stored only locally on your machine. Our servers do not save any of your code.",
  },
];

export const footerSections = [
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Privacy Policy",
        href: "/privacy",
      },
      {
        text: "Terms of Service",
        href: "/terms-of-service",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        text: "Documentation",
        href: "/docs",
      },
      {
        text: "Pricing",
        href: "/pricing",
      },
      {
        text: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        text: "FAQ",
        href: "/faq",
      },
      {
        text: "Email",
        href: "mailto:pear@trypear.ai",
      },
      {
        text: "Discord",
        href: "https://discord.gg/7QMraJUsQt",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: GitHubLogo,
    link: "https://github.com/trypear/pearai-app",
  },
  {
    icon: DiscordLogo,
    link: "https://discord.gg/AKy5FmqCkF",
  },
  {
    icon: TwitterLogo,
    link: "https://x.com/trypearai",
  },
  {
    icon: LinkedInLogo,
    link: "https://www.linkedin.com/company/trypearai",
  },
];
