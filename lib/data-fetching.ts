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

  // fetch user subscription data
  const { data: subscriptionData } = await supabase
    .from("subscriptions")
    .select(
      "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at",
    )
    .eq("user_id", userData.user.id)
    .maybeSingle();

  return {
    user: userData.user,
    subscription: subscriptionData,
    redirect: null,
  };
}
