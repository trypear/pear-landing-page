import { PricingTierData } from "@/types/pricing";
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
        "custom-standard",
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
        "custom-enterprise",
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
        text: "Blog",
        href: "/blog",
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
        target: "_blank",
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
