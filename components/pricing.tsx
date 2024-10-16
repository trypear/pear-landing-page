"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS, CONTACT_EMAIL } from "@/utils/constants";
import { toast } from "sonner";
import { Check, ChevronDown } from "lucide-react";
import { AppleLogo, WindowsLogo, LinuxLogo } from "./ui/icons";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Info } from "lucide-react";
import Spinner from "./ui/spinner";
import Footer from "./footer";

interface ExtendedPricingTierProps extends PricingTierProps {
  disabled?: boolean;
}

type VersionInfo = {
  version: string;
  lastReleaseDate: string;
};

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
  priceUnit = "/month",
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();
  const router = useRouter();
  const appleContainer = useRef<HTMLDivElement>(null);
  const [appleDownload, setAppleDownload] = useState<
    "darwin-arm64" | "intel-x64"
  >("darwin-arm64");

  // used to ensure animations run after mount client-side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientStyle = mounted
    ? {
        backgroundImage:
          "linear-gradient(45deg, #1a237e, #006064, #1b5e20, #006064, #b71c1c)",
        backgroundSize: "300% 300%",
        animation: "rainbow-animation 5s ease infinite",
        color: "white",
        transition: "all 0.3s ease",
      }
    : {};

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

  const featureRowDescription = (feature: string) => {
    if (feature?.startsWith("custom-standard")) {
      return (
        <div className="flex items-center">
          <span>
            Monthly refill of PearAI Credits for market-leading AI models
            <PearCreditsTooltip type="standard" />
          </span>
        </div>
      );
    } else if (feature?.startsWith("free")) {
      return (
        <div className="flex items-center">
          <span>
            Use our free trial, your own API key, or local models
            <PearCreditsTooltip type="free" />
          </span>
        </div>
      );
    } else if (feature?.startsWith("custom-enterprise")) {
      return (
        <div className="flex items-center">
          <span>
            Monthly refill of <span className="underline"> increased</span>{" "}
            PearAI Credits for market-leading AI models
            <PearCreditsTooltip type="enterprise" />
          </span>
        </div>
      );
    }
    return feature;
  };
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    const fetchVersionInfo = async () => {
      try {
        const response = await fetch("/api/version-info");
        if (!response.ok) {
          throw new Error("Failed to fetch version info");
        }
        const data: VersionInfo = await response.json();
        setVersionInfo(data);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchVersionInfo();
  }, []);

  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && "from-primary-600/5 ring-primary-900/40 dark:from-primary-600/5 dark:ring-primary-600/20"}`}
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
                You can download PearAI directly, and use our free trial, or
                your own API key 🤓
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
                  {priceUnit}
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
                <small>{priceUnit}</small>
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
                className="sm text-base text-gray-400"
                aria-label="Tagline: Start coding"
              >
                Free requests out of the box, no credit card required.
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
                  className="flex items-center py-2 text-gray-600"
                >
                  <Check
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary-700"
                    aria-hidden="true"
                  />
                  {featureRowDescription(feature)}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          {isDownloading ? (
            <Spinner className="mb-4 ml-4 border" />
          ) : (
            isFree &&
            (downloadLink !== undefined ? (
              <p className="text-gray-400">
                Thanks for trying out PearAI! Your download should have started,
                if it hasn&apos;t, click{" "}
                <a
                  className="cursor-pointer text-primary-700 transition-colors hover:text-primary-800"
                  href={downloadLink}
                >
                  here
                </a>
                .
              </p>
            ) : (
              <div className="flex w-full flex-col items-center gap-2">
                {versionInfo && (
                  <div className="ml-2 mr-auto text-sm text-gray-500">
                    version {versionInfo?.version}
                    <div>
                      last release{" "}
                      {new Date(
                        versionInfo?.lastReleaseDate,
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                )}
                <div className="flex w-full max-w-md gap-2">
                  <Button
                    className={cn("rainbow-gradient", "font-bold", "flex-1")}
                    onClick={() => handleDownload("windows")}
                  >
                    <WindowsLogo className="h-[18px] w-[18px] fill-white-main" />
                    Windows
                  </Button>

                  <Button
                    className={cn("rainbow-gradient", "font-bold", "flex-1")}
                    onClick={() =>
                      (window.location.href = "/blog/download-pearai-on-linux")
                    }
                  >
                    <LinuxLogo className="h-[18px] w-[18px] fill-white-main" />
                    Linux x64
                  </Button>
                </div>
                <div className="flex w-full max-w-md">
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        ref={buttonRef}
                        style={gradientStyle}
                        className="relative flex w-full items-center justify-center px-4 py-2 transition-opacity hover:opacity-90"
                      >
                        <div className="flex items-center">
                          <AppleLogo className="mr-2 h-[18px] w-[18px] fill-current" />
                          <span>MacOS</span>
                        </div>
                        <ChevronDown size="20" className="absolute right-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="center"
                      style={{
                        width:
                          buttonWidth !== null ? `${buttonWidth}px` : "auto",
                      }}
                      className="flex flex-col items-center justify-center border border-border/50 bg-background p-1"
                    >
                      <DropdownMenuItem
                        className="flex w-full justify-center rounded px-2 py-1.5 text-sm focus:bg-secondary-300/10"
                        onSelect={() => handleDownload("darwin-arm64")}
                      >
                        Silicon (M chip)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex w-full justify-center rounded px-2 py-1.5 text-sm focus:bg-secondary-300/10"
                        onSelect={() => handleDownload("intel-x64")}
                      >
                        Intel chip
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
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
        </CardFooter>
      </div>
    </Card>
  );
};

const PricingPage: React.FC<PricingPageProps> = ({ user }) => {
  return (
    <section
      className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-24"
      aria-labelledby="pricing-heading"
    >
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="mt-8 text-4xl font-medium leading-tight sm:text-4xl md:text-4xl lg:text-4xl"
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
                className="w-[135px] rounded-full px-4 py-2 text-secondary-main data-[state=active]:bg-primary-800 dark:text-white-main"
              >
                Standard
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="ml-[6px] w-[135px] rounded-full px-4 py-2 text-secondary-main data-[state=active]:bg-primary-800 dark:text-white-main"
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
                        priceUnit="/month/user"
                        disabled
                      />
                    </div>
                  ))}
                </div>
              )}
              <footer className="text-center">
                <p className="text-base text-gray-400 sm:text-lg md:text-xl">
                  Interested in these plans?
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
                  !
                </p>
              </footer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PricingPage;

export const PearCreditsTooltip = ({ type }: { type: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pearCreditsCount = useMemo(() => {
    return (type: string) => {
      if (type === "free") {
        return "50";
      } else if (type === "enterprise") {
        return "1000";
      }
      return "700";
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen} delayDuration={50}>
        <TooltipTrigger asChild>
          <Info
            className="mb-0.5 ml-1 inline-flex h-4 w-4 flex-shrink-0 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p className="max-w-[250px]">
            Current models include Claude 3.5 Sonnet and GPT4o.
            <br /> <br />
            Your PearAI Credits usage depend on your prompt input and output
            sizes. On average, this equates to around {pearCreditsCount(
              type,
            )}{" "}
            requests{type === "free" && " for our current free trial"}.
            {type !== "free" && (
              <>
                <br /> <br />
                Afraid of running out of credits? You can always contact{" "}
                <a
                  className="cursor-pointer text-primary-700 transition-colors hover:text-primary-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(CONTACT_EMAIL);
                    toast.success("Email copied to clipboard!");
                  }}
                >
                  PearAI support
                </a>{" "}
                to top up and keep building!
              </>
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
