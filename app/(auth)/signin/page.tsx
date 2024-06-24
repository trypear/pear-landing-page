import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignInComponent from "@/components/auth/signin";

export default async function SignIn() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }
  return (
    <>
      <SignInComponent />
    </>
  );
}
