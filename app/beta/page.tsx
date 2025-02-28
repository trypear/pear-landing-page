import BetaPage from "@/components/beta";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = constructMetadata({
  title: "Beta Download",
  description: "Download the beta version of PearAI.",
  canonical: "/beta",
});

export default async function Beta() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <BetaPage user={user} />
    </>
  );
}
