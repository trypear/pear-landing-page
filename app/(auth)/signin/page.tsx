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
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    if (searchParams.callback?.includes("://pearai.pearai/auth")) {
      // Redirect to dashboard page with callback for desktop app
      redirect("/dashboard?callback=" + searchParams.callback);
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
