import SettingsPage from "@/components/settings";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Settings() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  return <SettingsPage user={data.user} />;
}
