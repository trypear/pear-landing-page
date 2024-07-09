import SettingsPage from "@/components/settings";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Settings() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  // fetch user subscription data
  const { data: subscriptionData } = await supabase
    .from("subscriptions")
    .select(
      "subscription_id, pricing_tier, status, current_period_start, current_period_end, cancel_at_period_end, canceled_at",
    )
    .eq("user_id", data.user.id)
    .maybeSingle();

  return <SettingsPage user={data.user} subscription={subscriptionData} />;
}
