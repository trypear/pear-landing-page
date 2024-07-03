import PricingPage from "@/components/pricing";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = constructMetadata({
  title: "Pricing",
  description: "The pricing for PearAI.",
  canonical: "/pricing",
});

export default async function Pricing() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <PricingPage user={user} />
    </>
  );
}
