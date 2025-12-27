"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS } from "@/utils/constants";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Info } from "lucide-react";
import Footer from "./footer";
import Link from "next/link";
import { useDownload } from "@/hooks/useDownload";
import DownloadFeedbackForm from "./ui/download-feedback-form";
import { useReleases } from "@/hooks/useReleases";
import { ReleaseInfo } from "@/types/releaseTypes";
import CTA from "./cta";
import VersionInfo from "./ui/version-info";
interface ExtendedPricingTierProps extends PricingTierProps {
  disabled?: boolean;
  windowsRelease: ReleaseInfo;
  macRelease: ReleaseInfo;
  linuxRelease: ReleaseInfo;
}

const PricingTier: React.FC<ExtendedPricingTierProps> = ({
  title,
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
  windowsRelease,
  macRelease,
  linuxRelease,
}) => {
  const [detectedOS, setDetectedOS] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setDetectedOS("windows");
    if (userAgent.indexOf("Mac") !== -1) setDetectedOS("darwin-arm64");
    if (userAgent.indexOf("Linux") !== -1) setDetectedOS("linux");
  }, []);

  const { handleCheckout, isSubmitting } = useCheckout(user);
  const {
    downloadLink,
    handleDownload,
    showFeedback,
    setShowFeedback,
    handleFeedbackSubmit,
  } = useDownload();

  const dynamicVersions: Record<string, ReleaseInfo> = {
    Windows: windowsRelease,
    "Mac (M chip)": macRelease,
    "Mac (Intel)": macRelease,
    Linux: linuxRelease,
  };

  const featureRowDescription = (feature: string) => {
    if (feature?.startsWith("custom-standard")) {
      return (
        <div className="flex items-center">
          <span>
            Monthly refill of $15 credits for market-leading AI models
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

  return (
    <Card
      className={`bg-white/50 flex h-full w-full flex-col shadow-none ring-0 ${index === 0 ? "border-[#e6e6e6] lg:rounded-l-xl lg:rounded-r-none lg:border-2" : ""} ${index === 1 ? "rounded-none border-y-2 border-[#e6e6e6] bg-[#61CDFF] bg-opacity-5" : ""} ${index === 2 ? "border-[#e6e6e6] lg:rounded-l-none lg:rounded-r-xl lg:border-2" : ""}`}
    >
      <div className="flex h-full w-full flex-col">
        <CardHeader className="h-[164px] space-y-1 border-[#e6e6e6] p-5 lg:border-b-2">
          <CardTitle className="text-2xl font-medium text-black">
            {title}
          </CardTitle>
          {!isFree ? (
            <div className="flex flex-col items-start justify-center space-y-2">
              <p
                className="text-2xl font-medium text-[#666666]"
                aria-label={`Price: $${price} per month`}
              >
                {title === "Enterprise"
                  ? "Purchase bulk at a discount"
                  : `$${price}`}
                <small className="text-2xl font-medium text-[#666666]">
                  {title === "Enterprise" ? "" : `${priceUnit}`}
                </small>
                {(title === "Enterprise" || "Maker") && (
                  <small className="ml-1 inline-flex -translate-y-1 items-center rounded-lg bg-[#B3F353] px-2 py-1 text-xs font-medium text-[#16760C] opacity-80">
                    EARLY BIRD
                  </small>
                )}
              </p>

              <p className="text-[#666666]">
                {title === "Intern" || title === "Maker" ? description : ""}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-center space-y-2">
              <p
                className="text-2xl font-medium text-[#666666]"
                aria-label="Price: Free"
              >
                Free
              </p>
              <p className="text-[#666666]">Download with a free trial</p>
            </div>
          )}
        </CardHeader>

        <CardContent className="flex flex-grow flex-col p-5">
          {features && (
            <ul className="space-y-3" aria-label={`Features of ${title} plan`}>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base text-[#666666]"
                >
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 stroke-[4] text-black"
                    aria-hidden="true"
                  />
                  {featureRowDescription(feature)}
                </li>
              ))}
            </ul>
          )}
        </CardContent>

        <CardFooter className="relative p-5">
          {index === 1 && (
            <div className="absolute inset-0 flex h-[200%] -translate-y-20 items-center justify-center">
              <img
                src="/images/PricingCenterGradient.svg"
                alt="Pricing Gradient"
                width={400}
                height={200}
                className="h-full w-full"
              />
            </div>
          )}
          {isFree && (
            <div className="flex w-full flex-col items-center gap-2">
              <DownloadFeedbackForm
                isOpen={showFeedback}
                onClose={() => setShowFeedback(false)}
                onSubmit={handleFeedbackSubmit}
              />

              {/* <VersionInfo dynamicVersions={dynamicVersions} /> */}

              {downloadLink !== undefined && (
                <p className="text-gray-400">
                  Thanks for trying out PearAI! Your download should have
                  started, if it hasn&apos;t, click{" "}
                  <a
                    className="cursor-pointer text-primary-700 transition-colors hover:text-primary-800"
                    href={downloadLink}
                  >
                    here
                  </a>
                  .
                </p>
              )}
              <div className="flex w-full max-w-md gap-2">
                <Button
                  className="flex-1 bg-black font-semibold hover:bg-black/80"
                  onClick={() => {
                    if (detectedOS) {
                      handleDownload(detectedOS);
                    } else {
                      handleDownload("windows");
                    }
                  }}
                >
                  <img
                    src="/icons/ArrowDownTrayMicroIcon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-auto w-auto"
                  />
                  {detectedOS === "windows" && "Windows"}
                  {detectedOS === "darwin-arm64" && "MacOS (Silicon)"}
                  {detectedOS === "intel-x64" && "MacOS (Intel)"}
                  {detectedOS === "linux" && "Linux"}
                  {!detectedOS && "Download"}
                </Button>

                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-[#E8E8E8] px-2 hover:bg-[#E8E8E8]/80">
                      <EllipsisVerticalIcon className="h-6 w-6 text-black" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="bottom"
                    align="end"
                    className="w-fit border border-border/50 bg-background p-1"
                  >
                    <DropdownMenuItem
                      className="flex w-full items-center gap-2 rounded px-2 py-1.5 font-medium focus:bg-secondary-300/10"
                      onSelect={() => handleDownload("windows")}
                    >
                      Windows
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex w-full items-center gap-2 rounded px-2 py-1.5 font-medium focus:bg-secondary-300/10"
                      onSelect={() => handleDownload("darwin-arm64")}
                    >
                      MacOS (Silicon)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex w-full items-center gap-2 rounded px-2 py-1.5 font-medium focus:bg-secondary-300/10"
                      onSelect={() => handleDownload("intel-x64")}
                    >
                      MacOS (Intel)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex w-full items-center gap-2 rounded px-2 py-1.5 font-medium focus:bg-secondary-300/10"
                      onSelect={() =>
                        (window.location.href =
                          "/blog/download-pearai-on-linux")
                      }
                    >
                      Linux
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
          {!isFree && (
            <>
              {disabled ? (
                <Button className="w-full bg-[#E8E8E8] px-6 py-3 font-semibold text-black hover:bg-[#E8E8E8] hover:shadow-none">
                  Contact Us
                </Button>
              ) : (
                <Button
                  className="relative z-10 w-full bg-black font-semibold text-white-50 hover:bg-black"
                  onClick={() => priceId && handleCheckout(priceId)}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={`Subscribe to ${title} plan`}
                >
                  {isSubmitting ? "Processing..." : "Get started"}
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
  const { releases, isLoading } = useReleases();

  return (
    <>
      <section
        className="mt-[122px] w-full px-3"
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-[1049px] lg:pb-[68px]">
          <div className="flex flex-col items-center lg:space-y-10">
            <div className="flex w-full flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
              <div>
                <p className="text-sm text-[#666666]">PRICING</p>
                <h1
                  id="pricing-heading"
                  className="text-[44px] font-medium tracking-tight"
                >
                  Make your next project today.
                </h1>
              </div>
              <div className="flex flex-col space-y-[2px] rounded-lg bg-[#B3F353] bg-opacity-80 p-3 text-[#16760C]">
                <span className="text-xs font-medium">
                  Be the early bird and get a discount{" "}
                  <span className="font-bold">forever.</span>
                </span>
                <span className="text-2xl font-black">
                  20-30% off (forever)
                </span>
              </div>
            </div>

            <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

            {!isLoading &&
              PRICING_TIERS.standard &&
              PRICING_TIERS.enterprise && (
                <div
                  className="grid w-full max-w-[1049px] grid-cols-1 lg:grid-cols-3"
                  role="list"
                >
                  {[...PRICING_TIERS.standard, ...PRICING_TIERS.enterprise].map(
                    (tier, index) => (
                      <div key={index} role="listitem">
                        <PricingTier
                          {...tier}
                          user={user}
                          index={index}
                          windowsRelease={releases.windows}
                          macRelease={releases.mac}
                          linuxRelease={releases.linux}
                          disabled={tier.title === "Enterprise"}
                        />
                      </div>
                    ),
                  )}
                </div>
              )}
          </div>
        </div>
      </section>

      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

      <CTA />
      <Footer />
    </>
  );
};

export default PricingPage;

export const PearCreditsTooltip = ({ type }: { type: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
            Current built-in models for this plan include (but not limited to)
            <ul className="list-disc pl-4">
              <li>PearAI Model</li>
              <li>Claude 3.7 Sonnet</li>
              <li>Claude 3.5 Sonnet</li>
              <li>GPT4o</li>
              <li>Deepseek R1</li>
              <li>o1</li>
              <li>o3-mini</li>
              <li>Gemini 1.5 Pro</li>
              <li>Claude 3.5 Haiku (unlimited)</li>
            </ul>
            <br />
            Your PearAI Credits usage depends on the price of the underlying
            LLM, and your prompt&apos;s input and output sizes.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const PayAsYouGoTooltip = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
            If you happen to run out of credits (which is unlikely), you can
            switch to a{" "}
            <Link
              href="/pay-as-you-go"
              className="text-primary-700 hover:text-primary-800"
            >
              pay-as-you-go extra credit plan
            </Link>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const ServerAccessTooltip = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
            No need to configure and manage different API&apos;s and tools,
            PearAI will work out of the box.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
