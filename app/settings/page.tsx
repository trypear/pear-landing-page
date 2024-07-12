import SettingsPage from "@/components/settings";
import { getUserAndSubscription } from "@/lib/data-fetching";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = constructMetadata({
  title: "Settings",
  description: "Settings for your account.",
  canonical: "/settings",
});

export default async function Settings() {
  const {
    user,
    subscription,
    redirect: redirectTo,
  } = await getUserAndSubscription();
  const supabase = createClient();
  console.log("subscription: ", subscription);
  if (redirectTo || !user) {
    redirect(redirectTo ?? "/signin");
  } else {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return (
      <SettingsPage subscription={subscription!} initialSession={session!} />
    );
  }
}
