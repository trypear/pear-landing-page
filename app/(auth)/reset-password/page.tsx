import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ResetPasswordComponent from "@/components/auth/reset-password";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Reset Password",
  description: "Reset your password",
  canonical: "/reset-password",
});

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
