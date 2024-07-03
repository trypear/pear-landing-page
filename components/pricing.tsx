import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Download } from "lucide-react";
import Link from "next/link";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  buttonText?: string;
  isFree?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isFree = false,
}) => (
  <Card className="flex h-full w-full flex-col border border-primary-700">
    <CardHeader className="flex-grow space-y-3 p-6">
      <CardTitle className="text-2xl text-primary-700">{title}</CardTitle>
      <p className="text-sm font-medium text-gray-400 sm:text-base">
        {description}
      </p>
    </CardHeader>
    <CardContent className="flex flex-col space-y-6 p-6">
      {!isFree && (
        <p className="text-3xl font-medium sm:text-4xl">
          ${price}
          <span className="text-lg font-normal sm:text-xl"> /month</span>
        </p>
      )}
      {isFree ? (
        <>
          <Button className="flex w-full items-center justify-center rounded-2xl bg-primary-700 py-3 text-center text-sm text-white-50 hover:bg-primary-800 sm:py-4 sm:text-base">
            <Download strokeWidth={1} className="mr-2 h-4 w-4" /> Windows
          </Button>
          <Button className="flex w-full items-center justify-center rounded-2xl bg-primary-700 py-3 text-center text-sm text-white-50 hover:bg-primary-800 sm:py-4 sm:text-base">
            <Download strokeWidth={1} className="mr-2 h-4 w-4" /> macOS
          </Button>
          <Button className="flex w-full items-center justify-center rounded-2xl bg-primary-700 py-3 text-center text-sm text-white-50 hover:bg-primary-800 sm:py-4 sm:text-base">
            <Download strokeWidth={1} className="mr-2 h-4 w-4" /> Linux
          </Button>
        </>
      ) : (
        <Button className="w-full rounded-2xl bg-primary-700 py-4 text-center text-base text-white-50 hover:bg-primary-800">
          {buttonText}
        </Button>
      )}
    </CardContent>
    <CardFooter className="p-6">
      {!isFree && features && (
        <ul className="flex-grow space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check
                strokeWidth={1}
                className="mr-3 h-5 w-5 flex-shrink-0 text-primary-700"
              />
              <span className="text-sm font-medium text-primary-700 sm:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
    </CardFooter>
  </Card>
);

const PricingPage: React.FC = () => {
  const tiers: PricingTierProps[] = [
    {
      title: "Free",
      price: "0",
      description:
        "Download PearAI and use it for free with your own API keys!",
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
    },
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {/* Page header */}
          <div className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Fair pricing, unfair advantage.
            </h1>
            <p className="text-base font-medium text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
              Download PearAI today and get your coding efficiency to a new
              level
            </p>
          </div>
          {/* Pricing tiers */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div key={index} className="w-full">
                <PricingTier {...tier} />
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="text-center">
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Want to use it on a professional level?
              <Link
                href="#"
                className="ml-2 font-semibold text-primary-700 hover:text-primary-800"
              >
                Contact us for custom plans!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
