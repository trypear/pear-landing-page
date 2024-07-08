import { PricingTierData } from "@/types/pricing";

export const TEST_MODE_ENABLED =
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED === "true";

const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID = "price_1PZ9X608N4O93LU5yqMbGDtu";
const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID_TEST =
  "price_1PZUT208N4O93LU5jItKoEYu";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID = "price_1PXnJCAglzir3DVbp5mY53gH";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID_TEST =
  "price_1PZUPg08N4O93LU5M8u2GimE";
const NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID = "price_1PXnJCAglzir3DVbATy9fhLa";
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

export const PRICING_TIERS: PricingTierData[] = [
  {
    title: "Script Kiddie (Free)",
    price: "0",
    description:
      "You can download PearAI directly, and use your own API key 🤓",
    isFree: true,
  },
  {
    title: "Junior Engineer (Monthly)",
    price: "18",
    description:
      "Get the monthly subscription, and we'll take care of you... 😎",
    features: [
      "1000 GPT4o requests per month (Claude 3.5 Sonnet soon!)",
      "Direct customer support by the founders and contributors",
      "Private Discord channel",
    ],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.MONTHLY,
  },
  {
    title: "10x Engineer (Yearly)",
    price: "14",
    description: "Pay one lump sum yearly, and you'll be our VIP! 🤩",
    features: ["Everything from monthly", "Priority for new feature requests"],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.ANNUAL,
  },
];
