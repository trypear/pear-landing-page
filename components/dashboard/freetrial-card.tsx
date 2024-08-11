import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type FreeTrialCardProps = {
  usage: {
    max_quota: number | null;
    used_quota: number | null;
  };
  openAppQueryParams: string;
};

const DEFAULT_OPEN_APP_CALLBACK = "pearai://pearai.pearai/auth";

export default function FreeTrialCard({
  usage,
  openAppQueryParams,
}: FreeTrialCardProps) {
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
              Free Trial
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Requests</p>
              <p className="text-muted-foreground">
                {usage.used_quota} / {usage.max_quota || 30}
              </p>
            </div>
            <Progress
              value={(usage.used_quota! / (usage.max_quota! || 30)) * 100}
              className="mb-2 mt-2 h-2 w-full"
              indicatorColor="bg-primary-800 bg-opacity-75"
            />
            <p className="text-sm text-muted-foreground">
              You&apos;ve used {usage.used_quota} requests out of your{" "}
              <span className="font-medium">{usage.max_quota || 30}</span> fast
              requests quota for your free trial.
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
              <Button variant="outline" asChild>
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
        </CardContent>
      </div>
    </Card>
  );
}
