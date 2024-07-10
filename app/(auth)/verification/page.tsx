import VerificationComponent from "@/components/auth/verification";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Verification() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }
  return (
    <>
      <VerificationComponent />
    </>
  );
}
