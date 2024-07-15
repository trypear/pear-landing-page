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
    session,
    openAppUrl,
  } = await getUserAndSubscription();

  if (redirectTo || !user) {
    return redirect(redirectTo ?? "/signin");
  }

  return (
    <SettingsPage
      subscription={subscription!}
      initialSession={session!}
      openAppUrl={openAppUrl}
    />
  );
}
