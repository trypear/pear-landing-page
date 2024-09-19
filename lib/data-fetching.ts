import { Subscription } from "@/types/subscription";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-js";
import { Team, TeamInvite, TeamMember } from "@/types/team";

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

  // Check if the user is a team member
  const { data: teamMemberData, error: teamMemberError } = await supabase
    .from("team_members")
    .select("team_id")
    .eq("user_id", userData.user.id)
    .single();

  if (teamMemberError && teamMemberError.code !== "PGRST116") {
    console.error(
      "Error checking team membership:",
      JSON.stringify(teamMemberError, null, 2),
    );
  }

  let subscriptionData = null;

  if (teamMemberData?.team_id) {
    // User is a team member, fetch team subscription
    const { data: teamSubscription, error: teamSubError } = await supabase
      .from("subscriptions")
      .select(
        "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at, team_id",
      )
      .eq("team_id", teamMemberData.team_id)
      .eq("status", "active")
      .order("current_period_end", { ascending: false })
      .limit(1)
      .single();

    if (teamSubError) {
      console.error(
        "Error fetching team subscription data:",
        JSON.stringify(teamSubError, null, 2),
      );
    } else {
      subscriptionData = teamSubscription;
    }
  } else {
    // User is not a team member, check for individual subscription
    const { data: individualSub, error: individualSubError } = await supabase
      .from("subscriptions")
      .select(
        "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at, team_id",
      )
      .eq("user_id", userData.user.id)
      .eq("status", "active")
      .order("current_period_end", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (individualSubError) {
      console.error(
        "Error fetching individual subscription data:",
        JSON.stringify(individualSubError, null, 2),
      );
    } else {
      subscriptionData = individualSub;
    }
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

      const lastName = userData.last_name ?? "";
      const fullName = `${userData.first_name} ${lastName}`.trim();

      return {
        id: member.id,
        name: fullName,
        email: userData.email,
        role: member.role as "owner" | "admin" | "member",
      };
    });

    const members = await Promise.all(memberPromises);

    const invites: TeamInvite[] = invitesData.map((invite) => ({
      id: invite.id,
      email: invite.email,
      role: invite.role as "admin" | "member",
      status: "pending",
    }));

    const team: Team = {
      ...teamData,
      members,
      invites,
    };

    return { team, error: null };
  } catch (error) {
    console.error("Error fetching team data:", error);
    return { team: null, error: "Failed to fetch team data" };
  }
}
