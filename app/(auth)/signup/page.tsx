import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignUpComponent from "@/components/auth/signup";

export default async function SignUp() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }
  return (
    <>
      <SignUpComponent />
    </>
  );
}
