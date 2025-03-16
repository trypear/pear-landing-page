"use client";

import { User } from "@supabase/supabase-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Subscription } from "@/types/subscription";
import { toast } from "sonner";
import ProfileCard from "@/components/dashboard/profile-card";
import SubscriptionCard from "@/components/dashboard/subscription-card";
import FreeTrialCard from "@/components/dashboard/freetrial-card";
import { isAllowedUrl } from "@/lib/utils";
import { UnsafeUrlError } from "@/types/url";

type DashboardPageProps = {
  subscription: Subscription | null;
  openAppQueryParams: string | URLSearchParams;
  user: User;
  accessToken: string;
};

export type UsageType = {
  percent_credit_used: number | null;
  remaining_topup_credits: number | null;
  pay_as_you_go_credits: number | null;
  ttl: number | null;
};

export default function DashboardPage({
  subscription,
  openAppQueryParams,
  user,
  accessToken,
}: DashboardPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [usage, setUsage] = useState<UsageType>({
    percent_credit_used: null,
    remaining_topup_credits: null,
    pay_as_you_go_credits: null,
    ttl: -4,
  });

  const handleCallbackForApp = useCallback(async () => {
    const callback = searchParams?.get("callback");
    if (!callback) return;

    try {
      const decodedCallback = decodeURIComponent(callback);
      const callbackUrl = new URL(decodedCallback);

      if (!isAllowedUrl(callbackUrl)) {
        throw new UnsafeUrlError(decodedCallback);
      }

      const newSearchParams = new URLSearchParams(callbackUrl.search);
      const openAppParams =
        typeof openAppQueryParams === "string"
          ? new URLSearchParams(openAppQueryParams)
          : openAppQueryParams;

      openAppParams.forEach((value, key) => {
        newSearchParams.append(key, value);
      });

      callbackUrl.search = newSearchParams.toString();
      const openAppUrl = callbackUrl.toString();

      // Double-check the final URL
      const finalUrl = new URL(openAppUrl);
      if (!isAllowedUrl(finalUrl)) {
        throw new UnsafeUrlError(openAppUrl);
      }

      router.push(openAppUrl);
    } catch (error) {
      if (error instanceof UnsafeUrlError) {
        console.error(error.message);
        toast.error(
          "Unsafe link detected. Navigation blocked for your security.",
        );
      } else {
        console.error("Error in handleCallbackForApp:", error);
        toast.error(
          "An error occurred while processing the link. Please try again.",
        );
      }
    }
  }, [router, searchParams, openAppQueryParams]);

  const getUserRequestsUsage = useCallback(async () => {
    try {
      const response = await fetch("/api/dashboard-usage", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch requests usage.");
      }
      const usageData: UsageType = await response.json();
      setUsage(usageData);
    } catch (error) {
      console.error("Error fetching requests usage:", error);
      toast.error("Failed to fetch usage data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const runEffects = async () => {
      try {
        await handleCallbackForApp();
        await getUserRequestsUsage();
      } catch (error) {
        console.error("Error in effect:", error);
        toast.error(
          "An unexpected error occurred. Please try refreshing the page.",
        );
      }
    };

    runEffects();
  }, [handleCallbackForApp, getUserRequestsUsage]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-full overflow-auto p-4 pt-24 sm:p-8 md:p-16 md:pt-28 lg:px-32">
        <div className="bg-background p-4 text-foreground sm:p-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your account, billing, and preferences.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ProfileCard user={user} />
            {subscription ? (
              <SubscriptionCard
                subscription={subscription}
                usage={usage}
                openAppQueryParams={openAppQueryParams}
                user={user}
                loading={loading}
              />
            ) : (
              <FreeTrialCard
                loading={loading}
                usage={usage}
                openAppQueryParams={openAppQueryParams}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
