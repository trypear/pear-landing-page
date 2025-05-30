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
import { useMemo, useState, useCallback } from "react";
import {
  cancellationReasons,
  CancellationFeedback,
} from "@/types/cancellation";
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
  const [cancellationStep, setCancellationStep] = useState<
    "initial" | "feedback" | "final"
  >("initial");
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);
  const { handleCancelSubscription, isCanceling, isCanceled } =
    useCancelSubscription(user, subscription);
  const { handleUpgradeSubscription, isUpgrading } = useUpgradeSubscription(
    user,
    subscription,
  );
  const timeLeftUntilRefill = useMemo(() => {
    if (!usage?.ttl || usage?.ttl < 0) return "-";
    const seconds = usage.ttl;
    const hours = seconds / 3600;
    const days = hours / 24;

    if (days >= 1) {
      return `${Math.floor(days)} days left`;
    } else if (hours >= 1) {
      return `${Math.floor(hours)} hours left`;
    } else {
      return `${Math.floor(seconds)} seconds left`;
    }
  }, [usage]);

  const handleCancelClick = () => {
    if (isCanceled) {
      window.location.href = "/pricing";
    } else {
      setIsDialogOpen(true);
    }
  };

  const resetCancellationState = useCallback(() => {
    setCancellationStep("initial");
    setSelectedReasons([]);
    setComment("");
  }, []);

  const handleDialogClose = useCallback(() => {
    setIsDialogOpen(false);
    resetCancellationState();
  }, [resetCancellationState]);

  const handleConfirmCancel = async () => {
    if (cancellationStep === "initial") {
      setCancellationStep("feedback");
      return;
    }

    if (cancellationStep === "feedback") {
      setCancellationStep("final");
      return;
    }

    try {
      const feedback: CancellationFeedback = {
        reasons: selectedReasons,
        comment,
      };
      await handleCancelSubscription(subscription!.subscription_id, feedback);
    } finally {
      handleDialogClose();
    }
  };

  const handleReasonToggle = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason],
    );
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
                  Credits refills monthly ({timeLeftUntilRefill})
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
              {usage.pay_as_you_go_credits !== undefined &&
                usage.pay_as_you_go_credits! > 0 && (
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center">
                      <p className="font-medium">Pay-As-You-Go Extra Credits</p>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/pay-as-you-go">
                              <InfoIcon className="ml-1 h-3 w-3 text-gray-700 dark:text-gray-600" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="-ml-9 max-w-[200px] border-gray-300 bg-white-50 text-center text-xs text-gray-700 dark:border-gray-200 dark:bg-secondary-main dark:text-gray-800">
                            <p>
                              Credits billed monthly, or when billing thresholds
                              are hit ($15)
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {loading
                        ? "-"
                        : `$${usage.pay_as_you_go_credits!.toFixed(2)} used`}
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
                {/* Upgrade button temporarily removed
                {subscription.pricing_tier == "monthly" && (
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
                        <DialogTitle>
                          Upgrade Subscription Plan To Yearly
                        </DialogTitle>
                        <DialogDescription>
                          <br />
                          This will bring you to the checkout page to upgrade
                          your plan from monthly to yearly. For the details of
                          the yearly plan, see the{" "}
                          <a
                            href="/pricing"
                            target="_blank"
                            className="cursor-pointer text-primary-700 transition-colors hover:text-primary-800"
                          >
                            pricing page
                          </a>
                          .
                          <br />
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
                          {isUpgrading ? "Upgrading..." : "Upgrade"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
                */}
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
                  Open PearAI App
                </Link>
              </Button>
              <TopUpModal />
            </div>
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
                  {cancellationStep === "initial" && (
                    <DialogDescription>
                      Are you sure you want to cancel your subscription?
                      You&apos;ll lose access to premium features at the end of
                      your current billing period.
                    </DialogDescription>
                  )}
                  {cancellationStep === "feedback" && (
                    <DialogDescription>
                      We&apos;re sorry to see you go. Please help us improve by
                      letting us know why you&apos;re leaving:
                      <div className="mt-4 space-y-2">
                        {cancellationReasons.map((reason) => (
                          <div
                            key={reason}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              id={reason}
                              checked={selectedReasons.includes(reason)}
                              onChange={() => handleReasonToggle(reason)}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <label htmlFor={reason} className="text-sm">
                              {reason}
                            </label>
                          </div>
                        ))}

                        <div className="mt-4">
                          <label
                            htmlFor="comment"
                            className="block text-sm font-medium"
                          >
                            Additional comments (optional)
                          </label>
                          <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            rows={3}
                            placeholder="Tell us more about your experience..."
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  )}
                  {cancellationStep === "final" && (
                    <DialogDescription>
                      Are you absolutely sure you want to cancel your
                      subscription? This action cannot be undone.
                    </DialogDescription>
                  )}
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={handleDialogClose}
                    className="mt-2"
                  >
                    Keep Subscription
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleConfirmCancel}
                    disabled={
                      isCanceling ||
                      (cancellationStep === "feedback" &&
                        selectedReasons.length === 0)
                    }
                    className="mt-2"
                  >
                    {isCanceling
                      ? "Canceling..."
                      : cancellationStep === "initial"
                        ? "Continue"
                        : cancellationStep === "feedback"
                          ? "Next"
                          : "Confirm Cancellation"}
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
              Use the button above to login into the app directly.
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
