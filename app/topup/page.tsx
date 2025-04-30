"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { CheckCircle2 } from "lucide-react";
import { useTopUpCheckout } from "@/hooks/useTopUpCheckout";
import { useUser } from "@/hooks/useUser";

const REQUEST_OPTIONS = [
  { amount: 15, requests: 200, popular: false },
  { amount: 25, requests: 400, popular: false },
  { amount: 50, requests: 700, popular: true },
  { amount: 100, requests: 1400, popular: false },
];

export default function TopUpPage() {
  const [selectedAmount, setSelectedAmount] = useState(15);
  const { user } = useUser();
  const { handleTopUpCheckout, isSubmitting } = useTopUpCheckout(user);

  const handleBuyRequests = async () => {
    await handleTopUpCheckout(selectedAmount);
  };

  return (
    <section className="relative flex min-h-screen flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-24">
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl flex-grow px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1 className="mt-8 text-4xl font-medium leading-tight sm:text-4xl md:text-4xl lg:text-4xl">
              Top Up Credits
            </h1>
            <p className="mx-auto max-w-xl text-sm text-gray-700 dark:text-gray-600">
              &quot;Pay-as-you-go&quot; system for additional credits is
              temporarily paused. For additional credits, please top up credits.
              These credits <b>never expire</b>, staying in your account
              indefinitely until you use them. They are only used once
              you&apos;ve exhausted your Monthly PearAI credits. Your remaining
              top up credit amount will be shown on your dashboard. The amount
              purchased is deposited to your account, and the usage cost depends
              on the input&#47;output sizes of your prompts, and the LLM
              provider&#47;model used.
              <br />
              <br />
              Please contact us on the PearAI Discord server if you have any
              questions - we&apos;re here to help!
            </p>
          </header>
          <div className="mt-8 w-full max-w-3xl space-y-3">
            {REQUEST_OPTIONS.map((option) => (
              <Card
                key={option.amount}
                className={`relative h-[7rem] cursor-pointer transition-all ${
                  selectedAmount === option.amount
                    ? "bg-tertiary-100 ring-2 ring-secondary-main dark:bg-secondary-main dark:ring-white-50"
                    : "before:absolute before:inset-0 before:z-0 before:transition-colors hover:before:bg-tertiary-50 dark:hover:before:bg-secondary-main/50"
                } ${option.popular ? "overflow-hidden" : ""}`}
                onClick={() => setSelectedAmount(option.amount)}
              >
                <CardContent className="relative z-10 flex h-4 flex-col justify-between p-4">
                  <div className="relative min-h-[5rem]">
                    <div className="absolute left-0 top-0">
                      {selectedAmount === option.amount && (
                        <CheckCircle2 className="h-5 w-5 fill-gray-100/[0.15] text-secondary-main dark:fill-secondary-main dark:text-white-50" />
                      )}
                    </div>
                    <div className="mt-6">
                      <p className="text-2xl font-bold text-secondary-main dark:text-white-50">
                        ${option.amount}{" "}
                        <span className="text-lg">credits</span>
                      </p>
                    </div>
                    <div className="mt-1 flex items-center">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipContent className="-ml-9 max-w-[200px] border-gray-300 bg-white-50 text-center text-xs text-gray-700 dark:border-gray-200 dark:bg-secondary-main dark:text-gray-800">
                            <p>
                              Your PearAI Credits usage depends on the price of
                              the underlying LLM, and your prompt&apos;s input
                              and output sizes.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex max-w-3xl gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.history.back()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={handleBuyRequests}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
