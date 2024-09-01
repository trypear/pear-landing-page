"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS, CONTACT_EMAIL } from "@/utils/constants";
import { toast } from "sonner";
import { Check, ChevronDown } from "lucide-react";
import { AppleLogo, WindowsLogo } from "./ui/icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

interface ExtendedPricingTierProps extends PricingTierProps {
  disabled?: boolean;
}

const PricingTier: React.FC<ExtendedPricingTierProps> = ({
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
  disabled,
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();
  const router = useRouter();
  const appleContainer = useRef<HTMLDivElement>(null);
  const [appleDownload, setAppleDownload] = useState<
    "darwin-arm64" | "intel-x64"
  >("darwin-arm64");

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
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && "from-primary-600/5 ring-primary-600/20 dark:from-primary-600/5 dark:ring-primary-600/20"}`}
    >
      <div className="flex h-full w-full flex-col">
        <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
          <CardTitle className="text-2xl leading-6 text-primary-700">
            {title}
            &nbsp;
            {index === 1 && title === "Junior Engineer" && "(Monthly)"}
            {index === 2 && title === "10x Engineer" && "(Yearly)"}
          </CardTitle>
          <p className="text-base font-normal text-gray-600 sm:text-base md:text-sm">
            {index === 0 && isFree && (
              <>
                Join the&nbsp;
                <Link
                  href="https://forms.gle/171UyimgQJhEJbhU7"
                  className="text-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  waitlist
                </Link>
                &nbsp;to be notified when the app is available! Already off the
                waitlist?&nbsp;
                <Link href="/signin" className="text-link hover:underline">
                  Sign in.
                </Link>
              </>
            )}
            {!isFree && description}
          </p>
        </CardHeader>
        <CardContent className="mt-5 flex flex-grow flex-col px-6">
          {!isFree ? (
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
          ) : (
            <div className="flex flex-col items-start justify-center">
              <p
                className="text-2xl text-gray-900 sm:text-3xl"
                aria-label="Price: Free"
              >
                Free
              </p>
              <p
                className="text-base text-gray-400 sm:text-lg"
                aria-label="Tagline: Start coding"
              >
                Start coding
              </p>
            </div>
          )}
          {features && (
            <ul
              className="mt-5 w-full"
              aria-label={`Features of ${title} plan`}
            >
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 text-gray-400"
                >
                  <Check
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary-700"
                    aria-hidden="true"
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          {isFree && (
            <div className="flex">
              <Button onClick={() => handleDownload("windows")}>
                <WindowsLogo className="h-[18px] w-[18px] fill-white-main" />
                Windows
              </Button>
              <div ref={appleContainer}>
                <div className="flex flex-row">
                  <Button
                    className="ml-2 box-border w-[103px] justify-start rounded-r-none"
                    onClick={() => handleDownload("")}
                  >
                    <AppleLogo className="h-[18px] w-[18px] fill-white-main" />
                    {appleDownload === "darwin-arm64" && "Silicon"}
                    {appleDownload === "intel-x64" && "Intel"}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="min-h-full rounded-r-full bg-primary-900 pl-[10px] pr-[14px] transition-colors hover:bg-primary-900/80 dark:bg-primary-900 dark:hover:bg-primary-900/80">
                      <ChevronDown size="20" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      className="border border-border/50 bg-background"
                    >
                      <DropdownMenuItem
                        className="w-full focus:bg-secondary-300/10"
                        onSelect={() => setAppleDownload("darwin-arm64")}
                      >
                        Silicon (M chip)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="w-full focus:bg-secondary-300/10"
                        onSelect={() => setAppleDownload("intel-x64")}
                      >
                        Intel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          )}

          {!isFree && (
            <>
              {disabled ? (
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={() => priceId && handleCheckout(priceId)}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={`Subscribe to ${title} plan`}
                >
                  {isSubmitting ? "Processing..." : buttonText}
                </Button>
              )}
            </>
          )}

          {/* <button className="bg-primary-800 py-2 px-4 w-full rounded-full text-sm font-medium hover:bg-primary-800"> */}
          {/* Get Started */}
          {/* </button> */}
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
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
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

          <Tabs
            defaultValue="standard"
            className="mt-[20px] flex w-full flex-col items-center"
          >
            <TabsList className="h-full rounded-full bg-gray-300/20 px-2 py-2 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
              <TabsTrigger
                value="standard"
                className="w-[135px] rounded-full px-4 py-2 text-white-main data-[state=active]:bg-primary-800"
              >
                Standard
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="ml-[6px] w-[135px] rounded-full px-4 py-2 text-white-main data-[state=active]:bg-primary-800"
              >
                Enterprise
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="standard"
              className="w-full space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6"
            >
              <div className="mt-[20px] flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l from-primary-800/[0.15] via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
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
              {PRICING_TIERS.standard && (
                <div
                  className="mt-[20px] grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                  role="list"
                >
                  {PRICING_TIERS.standard.map((tier, index) => (
                    <div key={index} role="listitem">
                      <PricingTier {...tier} user={user} index={index} />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent
              value="enterprise"
              className="w-full space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6"
            >
              <div className="mt-[20px] flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l from-primary-800/[0.15] via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
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
              {PRICING_TIERS.enterprise && (
                <div
                  className="mt-[20px] grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2"
                  role="list"
                >
                  {PRICING_TIERS.enterprise.map((tier, index) => (
                    <div key={index} role="listitem">
                      <PricingTier
                        {...tier}
                        user={user}
                        index={index}
                        disabled
                      />
                    </div>
                  ))}
                </div>
              )}
              <footer className="text-center">
                <p className="text-base text-gray-400 sm:text-lg md:text-xl">
                  <button
                    className="ml-2 font-semibold text-primary-700 transition-colors hover:text-primary-800"
                    aria-label="Contact us for custom plans"
                    onClick={() => {
                      navigator.clipboard.writeText(CONTACT_EMAIL);
                      toast.success("Email copied to clipboard!");
                    }}
                  >
                    Contact us
                  </button>
                  &nbsp;if you&abpos;re interested in these plans.
                </p>
              </footer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default PricingPage;
