import { Metadata } from "next";

import { SuccessCard } from "@/components/dashboard/success-card";
import { getUserAndSubscription } from "@/lib/data-fetching";

export const metadata: Metadata = {
  title: "Subscription Upgrade Success",
  description: "Page for successful checkout of annual subscription upgrade",
};

export default async function DashboardSuccess() {
  const { openAppQueryParams } = await getUserAndSubscription();
  return <SuccessCard openAppQueryParams={openAppQueryParams} />;
}
