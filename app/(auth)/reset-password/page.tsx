import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ResetPasswordComponent from "@/components/auth/reset-password";

export default async function SignIn() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }
  return (
    <>
      <ResetPasswordComponent />
    </>
  );
}
