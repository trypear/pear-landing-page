import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

export default async function AuthButton() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <div className="hidden flex-row items-center space-x-1 text-secondary-600 md:flex">
      {error || !data?.user ? (
        <div className="flex flex-row items-center space-x-1">
          <CircleUserRound className="h-5 w-5" />

          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400"
            href={"/signin"}
          >
            Sign in
          </Link>
          <span className="text-secondary-600">/</span>
          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400"
            href={"/signup"}
          >
            Sign up
          </Link>
        </div>
      ) : (
        <>
          <CircleUserRound className="h-5 w-5" />
          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400"
            href={"/settings"}
          >
            Settings
          </Link>
          <span className="text-secondary-600">/</span>
          <form action={handleSignOut}>
            <button className="transition duration-150 ease-in-out hover:text-secondary-400">
              Sign out
            </button>
          </form>
        </>
      )}
    </div>
  );
}
