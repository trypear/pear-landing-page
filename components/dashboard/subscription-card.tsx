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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useCancelSubscription } from "@/hooks/useCancelSubscription";
import { User } from "@supabase/supabase-js";
import { InfoIcon } from "lucide-react";
import { UsageType } from "../dashboard";
import { toast } from "sonner";
import { useUpgradeSubscription } from "@/hooks/useUpgradeSubscription";
import TopUpModal from "../topup-modal";

type SubscriptionCardProps = {
  subscription: Subscription | null;
  usage?: UsageType;
  openAppQueryParams?: string | URLSearchParams;
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
                        : "Usage info not found. Contact PearAI support"}
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
              {usage.remaining_topup_credits !== undefined &&
                usage.remaining_topup_credits! > 0 && (
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center">
                      <p className="font-medium">Topup Credits</p>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <InfoIcon className="ml-1 h-3 w-3 text-gray-700 dark:text-gray-600" />
                          </TooltipTrigger>
                          <TooltipContent className="-ml-9 max-w-[200px] border-gray-300 bg-white-50 text-center text-xs text-gray-700 dark:border-gray-200 dark:bg-secondary-main dark:text-gray-800">
                            <p>
                              Top-up credit does not expire and is utilized only
                              after the monthly quota is reached.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {loading
                        ? "-"
                        : `$${Math.floor(usage.remaining_topup_credits! * 100) / 100} remaining`}
                    </p>
                  </div>
                )}
            </div>
          )}
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Plan</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-muted-foreground">
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
          <div className="flex justify-between">
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
            <TopUpModal />
          </div>
          <div className="flex items-center justify-between">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handleCancelClick}
                  disabled={isCanceling || isCanceled}
                  variant="link"
                  className={`ml-auto px-0 text-muted-foreground ${isCanceled ? "" : "underline"} underline-offset-2`}
                >
                  {isCanceling
                    ? "Canceling..."
                    : isCanceled
                      ? "Your subscription has been canceled, and will not be renewed at the end of the current period."
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
          <div className="mt-4 flex items-start text-xs text-muted-foreground">
            <InfoIcon className="mr-1 mt-0.5 h-3 w-3 flex-shrink-0" />
            <div>
              Make sure PearAI is
              <Link href="/pricing" className="mx-1">
                <span className="text-primary-800 hover:underline">
                  installed.
                </span>
              </Link>
              Use this button to open app and login directly.
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
