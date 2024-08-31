"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS, CONTACT_EMAIL } from "@/utils/constants";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import { toast } from "sonner";
import Spinner from "./ui/spinner";
import { Badge } from "./ui/badge";
import { AppleLogo, WindowsLogo } from "./ui/icons";

type SupportedOS = {
  name: string;
  os: string;
  chip?: string;
};

const SUPPORTED_OS: SupportedOS[] = [
  {
    name: "Download for Mac OS",
    os: "darwin-arm64",
    chip: "Apple silicon (M chip)",
  },
  {
    name: "Download for Mac OS",
    os: "intel-x64",
    chip: "Intel chip",
  },
  { name: "Download for Windows", os: "windows" },
];

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  prevPrice,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
  index,
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [downloaded, setDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();

  const handleDownload = async (os_type: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/download?os_type=${os_type}`, {
        method: "GET",
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData?.error ?? res.statusText);
      }

      // Get the blob from the response
      const blob = await res.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Get the filename from the Content-Disposition header
      const contentDisposition = res.headers.get("Content-Disposition");
      const filenameMatch = contentDisposition?.match(/filename="?(.+)"?/i);
      const filename = filenameMatch
        ? filenameMatch[1]
        : `PearAI-${os_type}-installer.dmg`;

      // Create a temporary anchor element and trigger the download
      // This method is used to ensure consistency across browsers
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      console.log(res.headers.get("X-Download-URL"));
      setDownloadLink(res.headers.get("X-Download-URL") ?? "None");
      setDownloaded(true);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const DownloadButton = ({ os }: { os: SupportedOS }) => {
    return (
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex w-[10%] items-center justify-start md:w-[20%]">
          <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary-1000 text-primary-700 md:flex">
            {os.os !== "windows" ? (
              <span className="flex h-5 w-5 items-center justify-center">
                <AppleLogo />
              </span>
            ) : (
              <span className="flex h-5 w-5 items-center justify-center">
                <WindowsLogo />
              </span>
            )}
          </div>
        </div>

        <div className="relative w-[90%] md:w-[80%]">
          <Button
            key={os.os}
            onClick={() => handleDownload(os.os)}
            className="relative flex h-12 w-full items-center justify-center px-4"
            aria-label={`Download for ${os.os}`}
          >
            <div className="flex items-center justify-center">
              <span className="text-center">{os.name}</span>
            </div>
          </Button>

          {os.chip && (
            // make sure to change the color here
            <Badge className="absolute right-2 top-[-9px] h-[1.35rem] transform bg-primary-1000 px-2 font-normal text-primary-700/80">
              {os.chip}
            </Badge>
          )}
        </div>
      </div>
    );
  };

  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && "from-primary-600/5 ring-primary-600/20 dark:from-primary-600/5 dark:ring-primary-600/20"}`}
    >
      <div className="flex h-auto w-full flex-col">
        <CardHeader className="flex-grow-0 px-6 pb-6 pt-6">
          <CardTitle className="text-2xl leading-6 text-primary-700">
            {title}
            <br />
            <small className="text-xl">
              {index === 0 && "(Free)"}
              {index === 1 && "(Monthly)"}
              {index === 2 && "(Yearly)"}
            </small>
          </CardTitle>
          <p className="text-base font-normal text-gray-600 sm:text-base md:text-sm">
            {description}
          </p>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col px-6">
          {!isFree && (
            <div className="flex flex-col items-start justify-center">
              <p
                className="text-2xl text-gray-900 sm:text-3xl"
                aria-label={`Price: $${price} per month`}
              >
                ${price}
                <small className="text-base text-gray-400 sm:text-lg">
                  /month
                </small>
                &nbsp;
                <small className="text-base text-primary-700 sm:text-lg">
                  &#40;Early Bird&#41;
                </small>
              </p>
              <p
                className="text-base text-gray-400 sm:text-lg"
                aria-label={`Original price: $${prevPrice} per month`}
              >
                <del>${prevPrice}</del>
                <small>/month</small>
              </p>
            </div>
          )}

          <div className="mt-6">
            {isFree ? (
              downloaded ? (
                <p className="text-sm font-medium text-gray-400 sm:text-base">
                  Thank you for downloading PearAI! Your download is now
                  completed.
                  <br />
                  <br />
                  If there was an issue, you can click{" "}
                  {downloadLink && (
                    <Link href={downloadLink} className="text-link">
                      here
                    </Link>
                  )}{" "}
                  to download again.
                </p>
              ) : isLoading ? (
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-s mt-2 text-gray-400">
                    Download in progress... Please hold!
                  </p>
                  <Spinner />
                </div>
              ) : (
                <div className="space-y-4">
                  {SUPPORTED_OS.map((os) => (
                    <DownloadButton os={os} key={os.os} />
                  ))}
                  <p className="mt-2 text-xs italic text-gray-400">
                    If you&apos;re having trouble installing, try a different
                    browser.
                  </p>
                </div>
              )
            ) : (
              <Button
                onClick={() => priceId && handleCheckout(priceId)}
                className="w-full"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label={`Subscribe to ${title} plan`}
              >
                {isSubmitting ? "Processing..." : buttonText}
              </Button>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          {!isFree && features && (
            <ul
              className="w-full space-y-4"
              aria-label={`Features of ${title} plan`}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-primary-700">
                  <Check
                    className="mr-3 h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

const PricingPage: React.FC<PricingPageProps> = ({ user }) => {
  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl"
            >
              Speed up your
              <br />
              development today.
            </h1>
          </header>

          <div className="flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l from-primary-800/[0.15] via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
            <div className="flex w-full items-center justify-between rounded-md">
              <p className="block w-max items-center justify-start md:flex">
                <span className="text-primary-700 dark:text-primary-800">
                  Be the early bird and get a discount
                </span>
                &nbsp;
                <span className="text-primary-900 dark:text-primary-700">
                  forever
                </span>
              </p>

              <p className="block w-max items-center justify-end text-right md:flex">
                <strong className="text-lg text-primary-900 dark:text-gray-900">
                  20-30% off
                </strong>
                &nbsp;
                <span className="font-normal text-primary-700 dark:text-primary-300">
                  &#40;forever&#41;
                </span>
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {PRICING_TIERS.map((tier, index) => (
              <div key={index} role="listitem">
                <PricingTier {...tier} user={user} index={index} />
              </div>
            ))}
          </div>

          <footer className="text-center">
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Want to use PearAI in your business?
              <button
                className="ml-2 font-semibold text-primary-700 transition-colors hover:text-primary-800"
                aria-label="Contact us for custom plans"
                onClick={() => {
                  navigator.clipboard.writeText(CONTACT_EMAIL);
                  toast.success("Email copied to clipboard!");
                }}
              >
                Contact us for custom plans!
              </button>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
export default PricingPage;
