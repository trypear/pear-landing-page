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

type SubscriptionCardProps = {
  subscription: Subscription | null;
  usage?: {
    max_quota: number | null;
    used_quota: number | null;
  };
  openAppQueryParams?: string;
  user: User;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";

export default function SubscriptionCard({
  subscription,
  usage,
  openAppQueryParams,
  user,
}: SubscriptionCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { handleCancelSubscription, isCanceling, isCanceled } =
    useCancelSubscription(user, subscription);

  const handleCancelClick = () => {
    if (isCanceled) {
      // Redirect to pricing page
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
            <div className="flex items-center justify-between">
              <p>You are not currently subscribed.</p>
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
    <Card className="overflow-auto bg-gray-100/10 p-6 text-card-foreground">
      <div className="grid gap-4">
        <CardHeader className="flex-row justify-between pb-4">
          <CardTitle className="text-xl font-semibold">
            Subscription & Usage
          </CardTitle>
          <div className="flex">
            <Badge
              variant="secondary"
              className="border-primary-800 bg-primary-800/10 px-2.5 py-0.5 text-primary-800"
            >
              Pro
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {usage && (
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-medium">Requests</p>
                <p className="text-muted-foreground">
                  {usage.used_quota} / {usage.max_quota}
                </p>
              </div>
              <Progress
                value={(usage.used_quota! / usage.max_quota!) * 100}
                className="mb-2 mt-2 h-2 w-full"
                indicatorColor="bg-primary-800 bg-opacity-75"
              />
              <p className="text-sm text-muted-foreground">
                {usage.used_quota} of {usage.max_quota} requests used
              </p>
            </div>
          )}
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Plan</p>
              <p className="text-muted-foreground">
                {capitalizeInital(subscription.pricing_tier)}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Period</p>
              <p className="text-muted-foreground">
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
            <div className="hidden sm:block">
              <Button variant="outline" className="text-primary-800" asChild>
                <Link
                  href={DEFAULT_OPEN_APP_CALLBACK + "?" + openAppQueryParams}
                >
                  Open PearAI
                </Link>
              </Button>
              <div className="mt-1 flex items-center">
                <Info className="inline text-muted-foreground" size={14} />
                <p className="ml-1.5 block text-xs text-muted-foreground">
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
        </CardContent>
      </div>
    </Card>
  );
}
