import SettingsPage from "@/components/settings";
import { getUserAndSubscription } from "@/lib/data-fetching";
import { redirect } from "next/navigation";

export default async function Settings() {
  const {
    user,
    subscription,
    redirect: redirectTo,
    openAppUrl,
  } = await getUserAndSubscription();

  if (redirectTo) {
    redirect(redirectTo);
  }

  // Code to appease typecheck, the non user redirect is already performed above.
  if (!user) {
    redirect("/signin");
  }

  return (
    <SettingsPage
      user={user}
      subscription={subscription}
      openAppUrl={openAppUrl}
    />
  );
}
