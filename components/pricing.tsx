"use client";
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
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS } from "@/utils/constants";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);

  return (
    <Card className="flex h-full w-full flex-col border">
      <CardHeader>
        <CardTitle className="text-2xl text-primary-700">{title}</CardTitle>
        <p className="text-sm font-medium text-gray-400 sm:text-base">
          {description}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col space-y-6 p-6">
        {!isFree && (
          <p
            className="text-3xl font-medium sm:text-4xl"
            aria-label={`Price: $${price} per month`}
          >
            ${price}
            <span className="text-lg font-normal sm:text-xl"> /month</span>
          </p>
        )}
        {isFree && (
          <p className="text-sm font-medium text-gray-400 sm:text-base">
            <a
              href="https://forms.gle/171UyimgQJhEJbhU7"
              className="text-amber-500/80 underline hover:text-amber-600/80"
              target="_blank"
            >
              Join the waitlist
            </a>{" "}
            to be notified when the app is available!
          </p>
        )}
        {isFree ? (
          ["Windows", "macOS"].map((os) => (
            <Button
              key={os}
              disabled={true}
              className="w-full rounded-2xl"
              aria-label={`Download for ${os}`}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" /> {os}
            </Button>
          ))
        ) : (
          <Button
            onClick={() => priceId && handleCheckout(priceId)}
            className="w-full rounded-2xl"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            aria-label={`Subscribe to ${title} plan`}
          >
            {isSubmitting ? "Processing..." : buttonText}
          </Button>
        )}
      </CardContent>
      <CardFooter className="p-6">
        {!isFree && features && (
          <ul
            className="flex-grow space-y-4"
            aria-label={`Features of ${title} plan`}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check
                  className="mr-3 h-5 w-5 flex-shrink-0 text-primary-700"
                  aria-hidden="true"
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
};
const PricingPage: React.FC<PricingPageProps> = ({ user }) => {
  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          <div className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Pricing
            </h1>
            <p className="text-base font-medium text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
              Pick the plan that&apos;s fits you best
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {PRICING_TIERS.map((tier, index) => (
              <div key={index} role="listitem">
                <PricingTier {...tier} user={user} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Want to use Pear in your business?
              <Link
                href="mailto:trypearai@gmail.com"
                className="ml-2 font-semibold text-primary-700 hover:text-primary-800"
                aria-label="Contact us for custom plans"
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
