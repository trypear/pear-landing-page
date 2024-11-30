import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Upgrade Success",
  description: "Page for successful checkout of annual subscription upgrade",
};

export default function DashboardSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="mx-4 w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="mb-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="mb-2 text-2xl font-bold tracking-tighter">
              Subscription Upgraded
            </h1>
            <p className="text-muted-foreground">
              Thank you! Your subscription has been successfully upgraded to
              annual.
            </p>
          </div>
          <Link href="/dashboard">
            <Button className="w-full">Return to Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
