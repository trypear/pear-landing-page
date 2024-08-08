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
import { toast } from "sonner";
import Spinner from "./ui/spinner";

type SupportedOS = {
  name: string;
  os: string;
};

const SUPPORTED_OS: SupportedOS[] = [
  { name: "Download for Mac (Apple silicon)", os: "darwin-arm64" },
  { name: "Download for Mac (Intel chip)", os: "intel-x64" },
  { name: "Download for Windows", os: "windows" },
];

type WaitlistEntry = {
  id: string;
  name: string;
  email: string;
  payment_intent_id: string;
  created_at?: Date;
  priority: boolean;
  access_given: boolean;
};

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
  waitlistAccess,
  isWaitlistInfoLoading,
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();
  const router = useRouter();

  const handleDownload = async (os_type: string) => {
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/download?os_type=${os_type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw Error(res.statusText);
      }

      const download = await res.json();
      if (download?.url) {
        setDownloadLink(download.url);
        router.push(download.url);
      }
      setDownloaded(true);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const DownloadButton = ({ os }: { os: SupportedOS }) => {
    return (
      <Button
        key={os.os}
        disabled={waitlistAccess ? false : true}
        onClick={() => handleDownload(os.os)}
        className="w-full rounded-2xl"
        aria-label={`Download for ${os.os}`}
      >
        <Download className="mr-2 h-4 w-4" aria-hidden="true" /> {os.name}
      </Button>
    );
  };

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
              <Link
                href="https://forms.gle/171UyimgQJhEJbhU7"
                className="text-link"
                target="_blank"
              >
                Join the waitlist
              </Link>{" "}
              to be notified when the app is available!
            </p>
          </>
        )}
        {isFree ? (
          downloaded ? (
            <p className="text-sm font-medium text-gray-400 sm:text-base">
              Thank you for downloading PearAI! Your download should have
              started! :)
              <br />
              <br />
              If it didn&apos;t, you can click{" "}
              {downloadLink && (
                <Link href={downloadLink} className="text-link">
                  here
                </Link>
              )}
              .
            </p>
          ) : isWaitlistInfoLoading || isDownloading ? (
            <div className="mx-auto">
              <Spinner />
            </div>
          ) : (
            <>
              {SUPPORTED_OS.map((os) => (
                <DownloadButton os={os} key={os.os} />
              ))}
              {waitlistAccess ?? (
                <p className="mt-2 text-xs italic text-gray-400">
                  If you&apos;re having trouble installing, try a different
                  browser.
                </p>
              )}
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
  const [waitlistInfo, setWaitlistInfo] = useState<WaitlistEntry>();
  const [isWaitlistInfoLoading, setIsWaitlistInfoLoading] = useState(false);

  useEffect(() => {
    // Check if user is in waitlist
    const getWaitlistInfo = async () => {
      setIsWaitlistInfoLoading(true);
      try {
        const res = await fetch("/api/waitlist-info", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          if (res.status === 404) {
            return;
          }
          throw Error(res.statusText);
        }
        const data = await res.json();
        setWaitlistInfo(data);
        return data;
      } catch (error: any) {
        toast.error(
          `Cannot obtain info on whether the user is on waitlist or not: ${error.message}`,
        );
      } finally {
        setIsWaitlistInfoLoading(false);
      }
    };
    if (user) {
      getWaitlistInfo();
    }
  }, [user]);

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
                <PricingTier
                  {...tier}
                  user={user}
                  waitlistAccess={!!waitlistInfo?.email}
                  isWaitlistInfoLoading={isWaitlistInfoLoading}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Want to use Pear in your business?
              <Link
                href="mailto:pear@trypear.ai"
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
