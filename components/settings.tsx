"use client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCancelSubscription } from "@/hooks/useCancelSubscription";
import { Subscription } from "@/types/subscription";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type SettingsPageProps = {
  user: User;
  subscription: Subscription | null;
};

export default function SettingsPage({
  user,
  subscription,
}: SettingsPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleCancelSubscription, isCanceling } = useCancelSubscription(user);
  const isCanceled = subscription?.cancel_at_period_end;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancelClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmCancel = async () => {
    try {
      await handleCancelSubscription(subscription!.subscription_id);
    } finally {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    // Open pearai app on desktop
    const callback = searchParams.get("callback");
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (callback && accessToken && refreshToken) {
      router.push(
        `${callback}?accessToken=${accessToken}&refreshToken=${refreshToken}`,
      );
      // TODO: clear the tokens from query?
    } else if (callback) {
      // Alert user if callback is present but either accessToken or refreshToken is null
      toast.error(
        "Access token or refresh token is missing. Cannot open PearAI app.",
      );
    }
  }, [router, searchParams]);

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
                        <span className="text-gray-500">Full name:</span>{" "}
                      </td>
                      <td>{user.user_metadata.full_name}</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email:</span>{" "}
                      </td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
                {user.app_metadata.provider === "email" && (
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
                        <strong>Current plan:</strong>{" "}
                        {subscription.pricing_tier}
                      </p>
                      <p>
                        <strong>Status:</strong> {subscription.status}
                      </p>
                      <p>
                        <strong>Current period:</strong>{" "}
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
                    </div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          onClick={handleCancelClick}
                          disabled={isCanceling || isCanceled}
                          variant="link"
                          size="sm"
                          className="mt-4 max-w-max"
                        >
                          {isCanceling
                            ? "Canceling..."
                            : isCanceled
                              ? "Subscription Canceled"
                              : "Cancel Subscription"}
                        </Button>
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
                            variant="outline"
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
