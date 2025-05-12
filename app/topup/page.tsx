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

import { STRIPE_PRICE_IDS } from "@/utils/constants";

const REQUEST_OPTIONS = [
  {
    amount: 15,
    requests: 200,
    popular: false,
  },
  {
    amount: 50,
    requests: 400,
    popular: false,
  },
  {
    amount: 100,
    requests: 700,
    popular: true,
  },
  {
    amount: null,
    requests: null,
    popular: false,
    label: "Custom credits",
  },
];

export default function TopUpPage() {
  // Accepts either number (standard credit option) or "custom" for custom credits
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(15);
  const { user } = useUser();
  const { handleTopUpCheckout, isSubmitting } = useTopUpCheckout(user);
  const handleBuyRequests = async () => {
    await handleTopUpCheckout(selectedAmount);
  };

  return (
    <>
      <section className="mx-auto mb-[68px] mt-[122px] flex max-w-[1049px] flex-col">
        <div className="mx-auto max-w-7xl flex-grow px-4">
          <div className="mx-auto flex flex-col gap-10 lg:flex-row">
            <header className="flex flex-1 flex-col justify-center space-y-4 text-left">
              <h1 className="text-4xl font-medium leading-tight">
                Top Up Credits
              </h1>
              <p className="text-[#666666]">
                Pay-as-you-go is temporarily paused. Top up credits never expire
                and are only used after your Monthly PearAI credits are
                exhausted. Usage cost varies based on prompt size and LLM model
                used.
              </p>
            </header>

            <div className="grid flex-1 grid-cols-2 gap-3">
              {REQUEST_OPTIONS.map((option) => {
                const idValue =
                  option.amount === null ? "custom" : option.amount;

                return (
                  <Card
                    key={idValue}
                    className={`relative cursor-pointer transition-all ${
                      selectedAmount === idValue
                        ? "bg-tertiary-100 ring-2 ring-secondary-main dark:bg-secondary-main dark:ring-white-50"
                        : "before:z-0 before:transition-colors hover:before:bg-tertiary-50 dark:hover:before:bg-secondary-main/50"
                    } ${option.popular ? "overflow-hidden" : ""}`}
                    onClick={() => setSelectedAmount(idValue)}
                  >
                    <CardContent className="relative z-10 justify-between p-4">
                      <div className="relative flex">
                        <div className="absolute">
                          {selectedAmount === idValue && (
                            <CheckCircle2 className="h-5 w-5 fill-gray-100/[0.15] text-secondary-main dark:fill-secondary-main dark:text-white-50" />
                          )}
                        </div>
                        <div className="mt-6">
                          {option.amount === null && option.label ? (
                            <p className="flex flex-col text-2xl font-bold text-secondary-main dark:text-white-50">
                              <span>Custom</span>{" "}
                              <span className="text-lg">credits</span>
                            </p>
                          ) : (
                            <p className="flex flex-col text-2xl font-bold text-secondary-main dark:text-white-50">
                              <span>${option.amount}</span>
                              <span className="text-lg">credits</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4">
            <div className="mx-auto">
              Please contact us on the PearAI Discord server if you have any
              questions - we&apos;re here to help!
            </div>
            <div className="mx-auto flex w-full gap-6">
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
      </section>
      <Footer />
    </>
  );
}
