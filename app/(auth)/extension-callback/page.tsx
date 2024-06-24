import { RedirectType, redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ExtensionCallbackComponent from "@/components/auth/extension-callback";

type Props = {
  searchParams: { redirect?: string };
};

export default async function ExtensionCallback({ searchParams }: Props) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  let redirectUrl: string = searchParams?.redirect ?? "/";

  // Check if the user is already authenticated
  if (data?.user) {
    // Append the auth token if it exists
    const token = (await supabase.auth.getSession())?.data?.session
      ?.access_token;
    if (token && redirectUrl.startsWith("vscode://")) {
      redirectUrl = `${redirectUrl}?token=${token}`;
    }

    redirect(redirectUrl);
  }
  return (
    <>
      <ExtensionCallbackComponent authenticated={false} />
    </>
  );
}
