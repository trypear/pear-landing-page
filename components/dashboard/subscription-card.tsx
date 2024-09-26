import Link from "next/link";
import { Subscription } from "@/types/subscription";
import { capitalizeInital } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useCancelSubscription } from "@/hooks/useCancelSubscription";
import { User } from "@supabase/supabase-js";
import { Info } from "lucide-react";
import { UsageType } from "../dashboard";
import { toast } from "sonner";
import { useUpgradeSubscription } from "@/hooks/useUpgradeSubscription";

type SubscriptionCardProps = {
  subscription: Subscription | null;
  usage?: UsageType;
  openAppQueryParams?: string;
  user: User;
  loading: boolean;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";

export default function SubscriptionCard({
  subscription,
  usage,
  openAppQueryParams,
  user,
  loading,
}: SubscriptionCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);
  const { handleCancelSubscription, isCanceling, isCanceled } =
    useCancelSubscription(user, subscription);
  const { handleUpgradeSubscription, isUpgrading } = useUpgradeSubscription(
    user,
    subscription,
  );

  const handleCancelClick = () => {
    if (isCanceled) {
      window.location.href = "/pricing";
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

  const handleUpgradeSubscriptionClick = async () => {
    try {
      if (subscription?.subscription_id) {
        await handleUpgradeSubscription();
        return;
      }
      toast.error("Failed to upgrade subscription. Subscription ID not found.");
    } catch (error) {
      console.error("Error upgrading subscription:", error);
      toast.error("Failed to upgrade subscription.");
    } finally {
      setIsUpgradeDialogOpen(false);
    }
  };

  if (!subscription) {
    return (
      <Card className="flex h-full flex-col overflow-auto bg-gray-100/10 text-card-foreground">
        <div className="grid gap-4">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-muted-foreground">
              <p>You are currently not subscribed.</p>
            </div>
          </CardContent>
          <CardFooter className="mt-8 pt-6">
            <Button
              variant="outline"
              asChild
              className="ml-auto text-primary-800"
            >
              <Link href="/pricing">Subscribe Now</Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-auto bg-gray-100/10 text-card-foreground">
      <div className="grid gap-4">
        <CardHeader className="flex-row justify-between pb-4">
          <CardTitle className="text-xl font-semibold">
            Subscription & Usage
          </CardTitle>
          <div className="flex">
            <Badge
              variant="secondary"
              className="border-primary-800 bg-primary-800/10 px-2 py-1 text-xs text-primary-800"
            >
              Pro - {capitalizeInital(subscription.pricing_tier)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {usage && (
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-medium">Requests</p>
                <p className="text-sm text-muted-foreground">
                  {loading ? (
                    "-"
                  ) : (
                    <strong>
                      {usage?.percent_credit_used != null
                        ? `${Math.min(usage.percent_credit_used, 100)}%`
                        : "Cannot find remaining percentage. Please contact PearAI support."}
                    </strong>
                  )}
                </p>
              </div>
              <Progress
                value={usage.percent_credit_used}
                className="mb-2 mt-2 h-2 w-full"
                indicatorColor="bg-primary-800 bg-opacity-75"
              />
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">
                  {loading
                    ? "-"
                    : `${Math.min(usage?.percent_credit_used ?? 0, 100)}% of PearAI Credits used`}
                </p>
                <p className="text-right text-sm text-muted-foreground">
                  Credits refill monthly
                </p>
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Plan</p>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">
                  {capitalizeInital(subscription.pricing_tier)}
                </p>
                {/* {subscription.pricing_tier == "monthly" && (
                  <Dialog
                    open={isUpgradeDialogOpen}
                    onOpenChange={setIsUpgradeDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Upgrade
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Upgrade</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to upgrade your subscription to
                          the Yearly Tier?
                          <br />
                          <br />
                          <b>
                            This change will take effect immediately, and be
                            charged on your current payment method. The price is
                            reflected on the{" "}
                            <a
                              href="/pricing"
                              target="_blank"
                              className="cursor-pointer text-primary-700 transition-colors hover:text-primary-800"
                            >
                              pricing page
                            </a>
                            .
                          </b>
                          <br />
                          <br />
                          We&apos;ll refund the remaining funds from the current
                          monthly subscription depending on the days remaining
                          on your cycle. You will not be able to downgrade
                          afterwards.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsUpgradeDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          disabled={isUpgrading}
                          onClick={() => {
                            handleUpgradeSubscriptionClick();
                          }}
                        >
                          {isUpgrading ? "Upgrading..." : "Confirm Upgrade"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )} */}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Period</p>
              <p className="text-sm text-muted-foreground">
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
          </div>
          <div className="mt-8 flex justify-between space-x-4">
            <div className="hidden space-x-2 sm:block">
              <Button variant="default" asChild>
                <Link
                  href={DEFAULT_OPEN_APP_CALLBACK + "?" + openAppQueryParams}
                  target="_parent"
                >
                  Open PearAI
                </Link>
              </Button>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handleCancelClick}
                  disabled={isCanceling}
                  variant="link"
                  className="px-0"
                >
                  {isCanceling
                    ? "Canceling..."
                    : isCanceled
                      ? "Subscription canceled, reactivate?"
                      : "Cancel Subscription"}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Cancel Subscription</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to cancel your subscription?
                    You&apos;ll lose access to premium features at the end of
                    your current billing period.
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
                    className="mt-2"
                  >
                    {isCanceling ? "Canceling..." : "Confirm Cancellation"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center">
            <Info className="inline text-muted-foreground" size={14} />
            <p className="ml-1.5 text-xs/6 text-muted-foreground">
              Make sure PearAI is{" "}
              <Button
                variant="link"
                asChild
                className="p-0 text-xs text-primary-800"
              >
                <Link href="/pricing">installed.</Link>
              </Button>{" "}
              Use this button to open the app and login directly.
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
