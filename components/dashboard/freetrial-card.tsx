import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

type FreeTrialCardProps = {
  usage: {
    max_quota: number | null;
    used_quota: number | null;
  };
  openAppQueryParams: string;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";
const DEFAULT_FREE_TRIAL_MAX_QUOTA = 50; // Sync with "FREE_TRIAL_MAX_QUOTA" env var from server

export default function FreeTrialCard({
  usage,
  openAppQueryParams,
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
            className="border-primary-800 bg-primary-800/10 px-2 py-1 text-sm text-primary-800"
          >
            Free Trial
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Requests</p>
              <p className="text-sm text-muted-foreground">
                <strong>
                  {usage.used_quota ?? 0} /{" "}
                  {usage.max_quota ?? DEFAULT_FREE_TRIAL_MAX_QUOTA}
                </strong>
              </p>
            </div>
            <Progress
              value={
                ((usage.used_quota ?? 0)! /
                  (usage.max_quota! ?? DEFAULT_FREE_TRIAL_MAX_QUOTA)) *
                100
              }
              className="mb-2 mt-2 h-2 w-full"
              indicatorColor="bg-primary-800 bg-opacity-75"
            />
            <p className="text-sm text-muted-foreground">
              {usage.used_quota ?? 0} of{" "}
              {usage.max_quota ?? DEFAULT_FREE_TRIAL_MAX_QUOTA} free trial
              requests used
            </p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Current Plan</p>
              <p className="text-muted-foreground">Free Trial</p>
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
            </div>
            <Button variant="link" asChild className="px-0 text-primary-800">
              <Link href="/pricing">Subscribe Now</Link>
            </Button>
          </div>
          <div className="flex items-center">
            <Info className="inline text-muted-foreground" size={14} />
            <p className="ml-1.5 text-xs text-muted-foreground">
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
