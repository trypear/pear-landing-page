import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignInComponent from "@/components/auth/signin";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Sign In",
  description: "Sign in to your account",
  canonical: "/signin",
});

export default async function SignIn({
  searchParams,
}: {
  searchParams: { callback?: string };
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    if (searchParams.callback?.startsWith("pearai://pearai.pearai/auth")) {
      // Redirect to settings page with callback for desktop app
      redirect("/settings?callback=" + searchParams.callback);
    } else {
      redirect("/");
    }
  }
  return (
    <>
      <SignInComponent />
    </>
  );
}
