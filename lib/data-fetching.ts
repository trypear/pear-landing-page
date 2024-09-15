import { Subscription } from "@/types/subscription";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-js";
import { Team, TeamMember } from "@/types/team";
type GetUserSubscriptionResult = {
  user: User | null;
  subscription: Subscription | null;
  openAppQueryParams: string;
  redirect: string | null;
};

type GetTeamDataResult = {
  team: Team | null;
  error: string | null;
};

export async function getUserAndSubscription(): Promise<GetUserSubscriptionResult> {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    return {
      user: null,
      openAppQueryParams: "",
      subscription: null,
      redirect: "/signin",
    };
  }
  const { data: sessionData } = await supabase.auth.getSession();
  const openAppQueryParams = `accessToken=${sessionData?.session?.access_token}&refreshToken=${sessionData?.session?.refresh_token}`;

  // Fetch the most recent user subscription data in case there are multiple
  const { data: subscriptionData, error } = await supabase
    .from("subscriptions")
    .select(
      "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at, team_id",
    )
    .eq("user_id", userData.user.id)
    .eq("status", "active")
    .order("current_period_end", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching subscription data:" + error);
  }

  return {
    user: userData.user,
    subscription: subscriptionData,
    openAppQueryParams,
    redirect: null,
  };
}

export async function getTeamData(teamId: string): Promise<GetTeamDataResult> {
  const supabase = createClient();

  try {
    // Fetch team data
    const { data: teamData, error: teamError } = await supabase
      .from("teams")
      .select("id, name, owner_id")
      .eq("id", teamId)
      .single();

    if (teamError) throw teamError;

    // Fetch active team members
    const { data: membersData, error: membersError } = await supabase
      .from("team_members")
      .select("id, user_id, role")
      .eq("team_id", teamId);

    if (membersError) throw membersError;

    // Fetch pending invites
    const { data: invitesData, error: invitesError } = await supabase
      .from("team_invites")
      .select("id, email, role")
      .eq("team_id", teamId)
      .eq("status", "pending");

    if (invitesError) throw invitesError;

    // Fetch user details for active members
    const memberPromises = membersData.map(async (member) => {
      const { data: userData, error: userError } = await supabase
        .from("profiles")
        .select("first_name, last_name, email")
        .eq("user_id", member.user_id)
        .single();

      if (userError) throw userError;

      return {
        id: member.id,
        name: `${userData.first_name} ${userData.last_name}`,
        email: userData.email,
        role: member.role,
        status: "accepted" as const,
      };
    });

    const members = await Promise.all(memberPromises);

    // Convert invites to TeamMember format
    const pendingMembers = invitesData.map((invite) => ({
      id: invite.id,
      name: "", // Name not known yet
      email: invite.email,
      role: invite.role,
      status: "pending" as const,
    }));

    const team: Team = {
      ...teamData,
      members: [...members, ...pendingMembers],
    };

    return { team, error: null };
  } catch (error) {
    console.error("Error fetching team data:", error);
    return { team: null, error: "Failed to fetch team data" };
  }
}
