"use client";
import { User } from "@supabase/supabase-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Subscription } from "@/types/subscription";
import { toast } from "sonner";
import ProfileCard from "@/components/dashboard/profile-card";
import SubscriptionCard from "@/components/dashboard/subscription-card";
import FreeTrialCard from "@/components/dashboard/freetrial-card";

type DashboardPageProps = {
  subscription: Subscription | null;
  openAppQueryParams: string;
  user: User;
};

type UsageType = {
  max_quota: number | null;
  used_quota: number | null;
  quota_remaining: number | null;
};

export default function DashboardPage({
  subscription,
  openAppQueryParams,
  user,
}: DashboardPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [usage, setUsage] = useState<UsageType>({
    max_quota: null,
    used_quota: null,
    quota_remaining: null,
  });

  useEffect(() => {
    const handleCallbackForApp = async () => {
      // Handle callback
      const callback = searchParams.get("callback");
      if (callback) {
        const decodedCallback = decodeURIComponent(callback);
        const callbackUrl = new URL(decodedCallback);
        const newSearchParams = new URLSearchParams(callbackUrl.search);
        const openAppParams = new URLSearchParams(openAppQueryParams);

        openAppParams.forEach((value, key) => {
          newSearchParams.append(key, value);
        });

        callbackUrl.search = newSearchParams.toString();
        const openAppUrl = callbackUrl.toString();

        router.push(openAppUrl);

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete("callback");
        window.history.replaceState({}, "", currentUrl.toString());
      }
      setLoading(false);
    };

    const getUserRequestsUsage = async () => {
      try {
        const response = await fetch("/api/get-requests-usage", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          toast.error("Failed to fetch requests usage.");
          return;
        }
        const usage = await response.json();
        setUsage(usage);
      } catch (error) {
        toast.error(`Error fetching requests usage: ${error}`);
      }
    };

    handleCallbackForApp();
    getUserRequestsUsage();
  }, [router, searchParams, openAppQueryParams]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-full overflow-auto p-4 pt-12 sm:p-8 md:p-16 lg:px-32">
        <div className="bg-background p-4 text-foreground sm:p-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your account, billing, and preferences.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ProfileCard user={user} />
            <SubscriptionCard
              subscription={subscription}
              usage={usage}
              openAppQueryParams={openAppQueryParams}
              user={user}
            />
            {/* Below commented out until we implement Free Trial */}
            {/* {subscription ? (
              <SubscriptionCard
                subscription={subscription}
                usage={usage}
                openAppQueryParams={openAppQueryParams}
                user={user}
              />
            ) : (
              <FreeTrialCard
                usage={usage}
                openAppQueryParams={openAppQueryParams}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
