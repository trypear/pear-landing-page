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
    const callbackForDesktopApp = searchParams?.callback ?? "";
    const accessToken = sessionData.session?.access_token ?? "";
    const refreshToken = sessionData.session?.refresh_token ?? "";
    const encodedAccessToken = encodeURIComponent(accessToken);
    const encodedRefreshToken = encodeURIComponent(refreshToken);
    return redirect(
      `/settings?callback=${encodeURIComponent(callbackForDesktopApp)}&accessToken=${encodedAccessToken}&refreshToken=${encodedRefreshToken}`,
    );
  }
  return (
    <>
      <SignInComponent />
    </>
  );
}
