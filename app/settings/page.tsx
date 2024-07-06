import SettingsPage from "@/components/settings";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Settings",
  description: "Settings for your account.",
  canonical: "/settings",
});

export default async function Settings() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  } else {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return <SettingsPage initialSession={session!} />;
  }
}
