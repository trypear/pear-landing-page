import DashboardPage from "@/components/dashboard";
import { getUserAndSubscription, getTeamData } from "@/lib/data-fetching";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Dashboard",
  description: "Manage your account, billing, and team preferences.",
  canonical: "/dashboard",
});

export default async function Dashboard() {
  const {
    user,
    subscription,
    redirect: redirectTo,
    openAppQueryParams,
  } = await getUserAndSubscription();

  if (redirectTo || !user) {
    return redirect(redirectTo ?? "/signin");
  }

  let team = null;
  let isTeamOwner = false;

  if (subscription && subscription.team_id) {
    const { team: fetchedTeam, error } = await getTeamData(
      subscription.team_id,
    );
    if (fetchedTeam) {
      team = fetchedTeam;
      isTeamOwner = team.owner_id === user.id;
    } else if (error) {
      console.error("Error fetching team data:", error);
    }
  }

  return (
    <DashboardPage
      subscription={subscription}
      openAppQueryParams={openAppQueryParams}
      user={user}
      team={team}
      isTeamOwner={isTeamOwner}
    />
  );
}
