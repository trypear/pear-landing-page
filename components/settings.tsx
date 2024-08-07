"use client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCancelSubscription } from "@/hooks/useCancelSubscription";
import { Subscription } from "@/types/subscription";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "./ui/skeleton";
import { toast } from "sonner";
import { capitalizeInital } from "@/lib/utils";

type SettingsPageProps = {
  subscription: Subscription | null;
  openAppQueryParams: string;
  user: User;
};

type UsageType = {
  max_quota: number | null;
  used_quota: number | null;
  quota_remaining: number | null;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";

export default function SettingsPage({
  subscription,
  openAppQueryParams,
  user,
}: SettingsPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [usage, setUsage] = useState<UsageType>({
    max_quota: null,
    used_quota: null,
    quota_remaining: null,
  });

  const { handleCancelSubscription, isCanceling, isCanceled } =
    useCancelSubscription(user, subscription);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancelClick = () => {
    if (isCanceled) {
      router.push("/pricing");
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleConfirmCancel = async () => {
    try {
      await handleCancelSubscription(subscription!.subscription_id);
    } finally {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const handleCallbackForApp = async () => {
      // Handle callback
      const callback = searchParams.get("callback");
      if (callback) {
        const decodedCallback = decodeURIComponent(callback);

        // Parse the decoded callback URL
        const callbackUrl = new URL(decodedCallback);

        // Append the openAppQueryParams to the existing query parameters
        const newSearchParams = new URLSearchParams(callbackUrl.search);
        const openAppParams = new URLSearchParams(openAppQueryParams);

        openAppParams.forEach((value, key) => {
          newSearchParams.append(key, value);
        });

        // Construct the new URL with updated query parameters
        callbackUrl.search = newSearchParams.toString();
        const openAppUrl = callbackUrl.toString();

        router.push(openAppUrl);

        // Clear the callback from the URL
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

  const openAppButton = (
    <Button asChild size="sm" className="mt-4">
      <Link href={DEFAULT_OPEN_APP_CALLBACK + "?" + openAppQueryParams}>
        Open PearAI App
      </Link>
    </Button>
  );

  // if signed in && subscription, show usage info
  const UsageInfo = ({ info }: { info: UsageType }) => {
    return (
      <div>
        {info?.max_quota ? (
          <>
            <p>
              <strong>Usage: </strong> {info.used_quota}/{info.max_quota}{" "}
              requests
            </p>
            <div className="w-1/2 rounded-full bg-gray-200 dark:bg-gray-800">
              <div
                className="rounded-full bg-[#00705a] p-[2.75px] text-center text-xs font-medium leading-none text-blue-100"
                style={{
                  width: `${(info.used_quota! / info.max_quota!) * 100}%`,
                }}
                id="progressbar"
              ></div>
            </div>
          </>
        ) : (
          <p>
            <strong>Usage: </strong>Loading...
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-12">
            <h1 className="text-4xl font-semibold md:text-5xl md:font-normal">
              Settings
            </h1>
          </div>

          {/* Settings */}
          <div className="mx-auto mb-4 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Basic Info */}
            <div className="rounded-md border p-4">
              <h3 className="mb-3 text-2xl font-semibold">Basic Info</h3>
              <div className="overflow-x-auto">
                <table>
                  <tbody className="text-sm">
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Full name: </span>
                      </td>
                      <td>
                        {loading ? (
                          <Skeleton className="h-4 w-[200px]" />
                        ) : (
                          user?.user_metadata.full_name
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email: </span>
                      </td>
                      <td>
                        {loading ? (
                          <Skeleton className="h-4 w-[200px]" />
                        ) : (
                          user?.email
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {user?.app_metadata.provider === "email" && (
                  <Button size="sm" className="mt-4">
                    <Link href="/update-password">Update Password</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Usage */}
            <div className="flex flex-col rounded-md border p-3">
              <h3 className="mb-3 text-2xl font-semibold">Usage</h3>
              <div className="flex h-full flex-col justify-between">
                {subscription ? (
                  <>
                    <div>
                      <p>
                        <strong>Current plan: </strong>
                        {capitalizeInital(subscription.pricing_tier)}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {capitalizeInital(subscription.status)}
                      </p>
                      <p>
                        <strong>Current period: </strong>
                        {new Date(
                          subscription.current_period_start * 1000,
                        ).toLocaleDateString()}{" "}
                        -{" "}
                        {subscription.current_period_end
                          ? new Date(
                              subscription.current_period_end * 1000,
                            ).toLocaleDateString()
                          : "Now"}
                      </p>
                      <UsageInfo info={usage} />
                    </div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <div className="row flex items-center justify-between">
                          {openAppButton}
                          <Button
                            onClick={handleCancelClick}
                            disabled={isCanceling}
                            variant="link"
                            size="sm"
                            className="mt-4 max-w-max"
                          >
                            {isCanceling
                              ? "Canceling..."
                              : isCanceled
                                ? "Subscription canceled, reactivate?"
                                : "Cancel Subscription"}
                          </Button>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Cancel Subscription</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to cancel your subscription?
                            You&apos;ll lose access to premium features at the
                            end of your current billing period.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            variant="default"
                            onClick={() => setIsDialogOpen(false)}
                            className="mt-2"
                          >
                            Keep Subscription
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={handleConfirmCancel}
                            disabled={isCanceling}
                            className="mb-2 mt-2"
                          >
                            {isCanceling
                              ? "Canceling..."
                              : "Confirm Cancellation"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  <>
                    <p className="mb-4">
                      You are not currently subscribed to any plan.
                    </p>
                    <Button asChild size="sm" className="max-w-max">
                      <Link href="/pricing">Upgrade to Pro</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
