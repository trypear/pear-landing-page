import EnterpriseDashboard from "@/components/team/enterprise-dashboard";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { getUserAndSubscription, getTeamData } from "@/lib/data-fetching";
import { redirect } from "next/navigation";

export const metadata: Metadata = constructMetadata({
  title: "Team Dashboard",
  description: "Manage your team, members, and roles.",
  canonical: "/team/dashboard",
});

export default async function EnterpriseDashboardPage() {
  const { user, subscription } = await getUserAndSubscription();

  if (!user || !subscription || !subscription.team_id) {
    redirect("/dashboard?error=unauthorized");
  }

  const { team, error } = await getTeamData(subscription.team_id);

  if (error || !team) {
    redirect("/dashboard?error=team-not-found");
  }

  return (
    <EnterpriseDashboard team={team} user={user} subscription={subscription} />
  );
}
