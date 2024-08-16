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
import { PRICING_TIERS, CONTACT_EMAIL } from "@/utils/constants";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import Spinner from "./ui/spinner";

type SupportedOS = {
  name: string;
  os: string;
  chip?: string;
};

const SUPPORTED_OS: SupportedOS[] = [
  {
    name: "Download for Mac",
    os: "darwin-arm64",
    chip: "Apple silicon",
  },
  {
    name: "Download for Mac",
    os: "intel-x64",
    chip: "Intel chip",
  },
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
  prevPrice,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
  waitlistAccess,
  isWaitlistInfoLoading,
  index,
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
      <div className="flex w-full items-center justify-between">
        <div className="flex w-[10%] items-center justify-start md:w-[20%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/10 text-primary-700">
            {os.os !== "windows" ? (
              <span className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <g clip-path="url(#clip0_1937_2112)">
                      <path
                        d="M25.0668 9.5452C24.9044 9.6712 22.0372 11.2868 22.0372 14.8792C22.0372 19.0344 25.6856 20.5044 25.7948 20.5408C25.778 20.6304 25.2152 22.554 23.8712 24.514C22.6728 26.2388 21.4212 27.9608 19.5172 27.9608C17.6132 27.9608 17.1232 26.8548 14.9252 26.8548C12.7832 26.8548 12.0216 27.9972 10.28 27.9972C8.5384 27.9972 7.3232 26.4012 5.926 24.4412C4.3076 22.1396 3 18.564 3 15.1704C3 9.7272 6.5392 6.8404 10.0224 6.8404C11.8732 6.8404 13.416 8.0556 14.578 8.0556C15.684 8.0556 17.4088 6.7676 19.5144 6.7676C20.3124 6.7676 23.1796 6.8404 25.0668 9.5452ZM18.5148 4.4632C19.3856 3.43 20.0016 1.9964 20.0016 0.5628C20.0016 0.364 19.9848 0.1624 19.9484 0C18.5316 0.0532 16.846 0.9436 15.8296 2.1224C15.0316 3.0296 14.2868 4.4632 14.2868 5.9164C14.2868 6.1348 14.3232 6.3532 14.34 6.4232C14.4296 6.44 14.5752 6.4596 14.7208 6.4596C15.992 6.4596 17.5908 5.6084 18.5148 4.4632Z"
                        fill="currentColor"
                        fill-opacity="0.8"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1937_2112">
                      <rect
                        width="22.792"
                        height="28"
                        fill="white"
                        transform="translate(3)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            ) : (
              <span className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.625 12.8625H12.8629V2.625H2.625V12.8625ZM15.138 12.8625H25.375V2.625H15.138V12.8625ZM12.8629 25.375H2.625V15.1375H12.8629V25.375ZM15.138 25.375H25.375V15.1375H15.138V25.375Z"
                      fill="currentColor"
                      fill-opacity="0.8"
                    />
                  </g>
                </svg>
              </span>
            )}
          </div>
        </div>

        <Button
          key={os.os}
          disabled={waitlistAccess ? false : true}
          onClick={() => handleDownload(os.os)}
          className={`w-[90%] md:w-[80%] ${os.chip && "h-12"}`}
          aria-label={`Download for ${os.os}`}
        >
          <div className="flex flex-row items-center justify-center space-x-1 md:flex-col md:space-x-0">
            <div>{os.name}</div>
            <div className="text-sm font-normal">
              {os.chip && `(${os.chip})`}
            </div>
          </div>
          <Download className="ml-1 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    );
  };

  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && "from-primary-600/5 ring-primary-600/20 dark:from-primary-600/5 dark:ring-primary-600/20"}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl leading-6 text-primary-700">
          {title}
          <br />
          <span className="text-xl">
            {index === 0 && "(Free)"}
            {index === 1 && "(Monthly)"}
            {index === 2 && "(Yearly)"}
          </span>
        </CardTitle>
        <p className="text-base font-normal text-gray-600 sm:text-base md:text-sm">
          {description}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 px-6">
        {!isFree && (
          <div className="flex flex-col items-start justify-center">
            <p
              className="text-2xl text-gray-900 sm:text-3xl"
              aria-label={`Price: $${price} per month`}
            >
              ${price}
              <span className="text-base text-gray-400 sm:text-lg">/month</span>
              &nbsp;
              <span className="text-base text-primary-700 sm:text-lg">
                &#40;Early Bird&#41;
              </span>
            </p>

            <p
              className="text-base text-gray-400 sm:text-lg"
              aria-label={`Price: $${prevPrice} per month`}
            >
              <span className="line-through">${prevPrice}</span>
              <span className="text-base sm:text-lg">/month</span>
            </p>
          </div>
        )}
        {isFree && (
          <>
            <p className="text-sm text-gray-600 sm:text-base">
              <a
                href="https://forms.gle/171UyimgQJhEJbhU7"
                className="text-link"
                target="_blank"
              >
                Join the waitlist
              </a>{" "}
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
            className="w-full"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            aria-label={`Subscribe to ${title} plan`}
          >
            {isSubmitting ? "Processing..." : buttonText}
          </Button>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6">
        {!isFree && features && (
          <ul
            className="flex-grow space-y-4"
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
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <div className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl"
            >
              Start for free,
              <br />
              pay as you grow
            </h1>
          </div>

          <div className="flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l from-primary-800/[0.15] via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
            <div className="flex w-full items-center justify-between rounded-md">
              <div className="block w-max items-center justify-start md:flex">
                <span className="text-primary-700 dark:text-primary-800">
                  Be the early bird and get a great discount
                </span>
                &nbsp;
                <span className="text-primary-900 dark:text-primary-700">
                  forever
                </span>
              </div>

              <div className="block w-max items-center justify-end text-right md:flex">
                <span className="text-lg text-primary-900 dark:text-gray-900">
                  20-30% off
                </span>
                &nbsp;
                <span className="font-normal text-primary-700 dark:text-primary-300">
                  &#40;forever&#41;
                </span>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {PRICING_TIERS.map((tier, index) => (
              <div key={index} role="listitem">
                <PricingTier
                  {...tier}
                  user={user}
                  waitlistAccess={!!waitlistInfo?.email}
                  isWaitlistInfoLoading={isWaitlistInfoLoading}
                  index={index}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Want to use Pear in your business?
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPage;
