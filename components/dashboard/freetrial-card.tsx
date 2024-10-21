import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";
import { UsageType } from "../dashboard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type FreeTrialCardProps = {
  usage: UsageType;
  openAppQueryParams: string | URLSearchParams;
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
                {loading ? "-" : Math.min(usage?.percent_credit_used ?? 0, 100)}
                % of free trial PearAI Credits used
              </p>
            </div>
          </div>
          {usage.remaining_topup_credits !== undefined &&
            usage.remaining_topup_credits! > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between">
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
              </div>
            )}
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
            <Button variant="default" asChild>
              <Link href="/pricing">Subscribe Now</Link>
            </Button>
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
