import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignInComponent from "@/components/auth/signin";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { toast } from "sonner";

export const metadata: Metadata = constructMetadata({
  title: "Sign In",
  description: "Sign in to your account",
  canonical: "/signin",
});

interface SignInProps {
  searchParams: {
    callback?: string;
    [key: string]: string | string[] | undefined;
  };
}

export default async function SignIn({ searchParams }: SignInProps) {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const { data: sessionData } = await supabase.auth.getSession();

  if (userData?.user) {
    if (!searchParams?.callback) {
      return redirect("/settings");
    }
    // If signing in from desktop app
    const callbackForDesktopApp = searchParams?.callback ?? "";
    const accessToken = sessionData.session?.access_token ?? "";
    const refreshToken = sessionData.session?.refresh_token ?? "";
    if (accessToken && refreshToken) {
      return redirect(
        `/settings?callback=${encodeURIComponent(callbackForDesktopApp)}&accessToken=${encodeURIComponent(accessToken)}&refreshToken=${encodeURIComponent(refreshToken)}`,
      );
    } else {
      toast.error("Access Token or Refresh Token not found.");
    }
    return redirect("/settings");
  }

  return (
    <>
      <SignInComponent />
    </>
  );
}
