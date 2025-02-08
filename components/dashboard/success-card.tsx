"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { isAllowedUrl } from "@/lib/utils";
import { toast } from "sonner";
import { DEFAULT_OPEN_APP_CALLBACK } from "@/utils/constants";


export const SuccessCard = ({
  openAppQueryParams,
}: {
  openAppQueryParams: string | URLSearchParams;
}) => {
  const router = useRouter();

  useEffect(() => {
    const openApp = async () => {
      const callbackUrl = DEFAULT_OPEN_APP_CALLBACK + "?" + openAppQueryParams;

      try {
        const finalUrl = new URL(callbackUrl);

        if (!isAllowedUrl(finalUrl)) {
          throw new Error("Unsafe URL detected.");
        }

        router.push(finalUrl.toString());
      } catch (error) {
        console.error("Error opening PearAI app:", error);
        toast.error(
          "An error occurred while opening the PearAI app. Please try again.",
        );
      }
    };

    openApp();
  }, [openAppQueryParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="mx-4 w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="mb-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="mb-2 text-2xl font-bold tracking-tighter">
              Subscription Upgraded
            </h1>
            <p className="text-muted-foreground">
              Thank you! Your subscription has been successfully upgraded to
              annual.
            </p>
          </div>
          <Link href="/dashboard">
            <Button className="w-full">Return to Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
