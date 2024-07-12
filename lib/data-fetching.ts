import { Subscription } from "@/types/subscription";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-js";

type GetUserSubscriptionResult = {
  user: User | null;
  subscription: Subscription | null;
  redirect: string | null;
};

export async function getUserAndSubscription(): Promise<GetUserSubscriptionResult> {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    return { user: null, subscription: null, redirect: "/signin" };
  }

  // Fetch the most recent user subscription data in case there are multiple
  const { data: subscriptionData, error } = await supabase
    .from("subscriptions")
    .select(
      "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at",
    )
    .eq("user_id", userData.user.id)
    .eq("status", "active") // Ensure the status is active
    .order("current_period_end", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    if (
      error?.message !== "JSON object requested, multiple (or no) rows returned"
    ) {
      console.error("Error fetching subscription data:", error);
    }
  }

  return {
    user: userData.user,
    subscription: subscriptionData,
    redirect: null,
  };
}
