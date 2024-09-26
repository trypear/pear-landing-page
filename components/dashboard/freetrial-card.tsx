import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { UsageType } from "../dashboard";

type FreeTrialCardProps = {
  usage: UsageType;
  openAppQueryParams: string;
  loading: boolean;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";
const DEFAULT_FREE_TRIAL_MAX_QUOTA = 50; // Sync with "FREE_TRIAL_MAX_QUOTA" env var from server

export default function FreeTrialCard({
  usage,
  openAppQueryParams,
  loading,
}: FreeTrialCardProps) {
  return (
    <Card className="overflow-auto bg-gray-100/10 text-card-foreground">
      <div className="grid gap-4">
        <CardHeader className="flex-row justify-between pb-4">
          <CardTitle className="text-xl font-semibold">
            Subscription & Usage
          </CardTitle>
          <Badge
            variant="secondary"
            className="border-primary-800 bg-primary-800/10 px-2 py-1 text-xs text-primary-800"
          >
            Free Trial
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">PearAI Credits</p>
              <p className="text-sm text-muted-foreground">
                <strong>
                  {loading ? (
                    "-"
                  ) : (
                    <strong>
                      {usage?.percent_credit_used != null
                        ? `${usage.percent_credit_used}%`
                        : "Cannot find used percentage. Please contact PearAI support."}
                    </strong>
                  )}
                </strong>
              </p>
            </div>
            <Progress
              value={usage.percent_credit_used}
              className="mb-2 mt-2 h-2 w-full"
              indicatorColor="bg-primary-800 bg-opacity-75"
            />
            <div className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                {loading ? "-" : usage.percent_credit_used}% of free trial
                PearAI Credits used
              </p>
              <p className="text-right text-sm text-muted-foreground">
                Credits refresh every month
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Plan</p>
              <p className="text-sm text-muted-foreground">Free Trial</p>
            </div>
          </div>
          <div className="mt-8 flex justify-between space-x-4">
            <div className="hidden sm:block">
              <Button variant="outline" className="text-primary-800" asChild>
                <Link
                  href={DEFAULT_OPEN_APP_CALLBACK + "?" + openAppQueryParams}
                  target="_parent"
                >
                  Open PearAI
                </Link>
              </Button>
            </div>
            <Button variant="link" asChild className="px-0 text-primary-800">
              <Link href="/pricing">Subscribe Now</Link>
            </Button>
          </div>
          <div className="mt-1 flex items-center">
            <Info className="inline text-muted-foreground" size={14} />
            <p className="ml-1.5 text-xs/3 text-muted-foreground">
              Make sure PearAI is{" "}
              <Button
                variant="link"
                asChild
                className="p-0 text-xs text-primary-800"
              >
                <Link href="/pricing">installed.</Link>
              </Button>{" "}
              Use this button to open app and login directly.
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
