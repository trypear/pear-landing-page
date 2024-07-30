"use client";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

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
  const [downloaded, setDownloaded] = useState(false);
  const router = useRouter();

  function getOS(): string {
    const userAgent = navigator.userAgent;

    if (/Windows/.test(userAgent)) {
      return "Windows";
    } else if (/Macintosh|Mac OS X/.test(userAgent)) {
      return "MacOS";
    } else if (/Linux/.test(userAgent)) {
      return "Linux";
    } else if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(
        userAgent,
      )
    ) {
      return "mobile"; // This could be further refined
    } else {
      return "unknown";
    }
  }

  async function handleDownload(os_type: string) {
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ os_type }),
      });

      const data = await res.json();
      // navigate to the download link
      if (data.url) {
        window.location.href = data.url;
      }
      setDownloaded(true);
      router.push("/download");
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  // param is a () => string type
  function DownloadButton({ os }: { os: string }) {
    return (
      <Button
        key={os}
        disabled={user ? false : true}
        onClick={() => handleDownload(os.toLowerCase())}
        className="w-full rounded-2xl"
        aria-label={`Download for ${os}`}
      >
        <Download className="mr-2 h-4 w-4" aria-hidden="true" /> {os}
      </Button>
    );
  }

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
          <>
            <p className="text-sm font-medium text-gray-400 sm:text-base">
              <a
                href="https://forms.gle/171UyimgQJhEJbhU7"
                className="text-link"
                target="_blank"
              >
                Join the waitlist
              </a>{" "}
              to be notified when the app is available!
            </p>
            {!user && (
              <p>
                Please{" "}
                <a href="/signin" className="text-link">
                  log in
                </a>{" "}
                to download for free.
              </p>
            )}
          </>
        )}
        {isFree ? (
          downloaded ? (
            <p className="text-sm font-medium text-gray-400 sm:text-base">
              Thank you for downloading PearAI!
            </p>
          ) : (
            <>
              <DownloadButton os={getOS()} />
            </>
          )
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
