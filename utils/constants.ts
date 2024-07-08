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
    title: "Free",
    price: "0",
    description: "Download PearAI and use it for free with your own API keys!",
    isFree: true,
  },
  {
    title: "Monthly",
    price: "18",
    description:
      "Get the monthly subscription and get your supercharged coding editor assistant",
    features: [
      "Pro two-week trial",
      "Unlimited Copilot++ completions",
      "OpenAI zero-data retention",
      "Unlimited Copilot++ completions",
    ],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.MONTHLY,
  },
  {
    title: "Yearly",
    price: "14",
    description: "Pay yearly and get... add text here",
    features: [
      "Pro two-week trial",
      "Unlimited Copilot++ completions",
      "OpenAI zero-data retention",
      "Unlimited Copilot++ completions",
    ],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.ANNUAL,
  },
];
