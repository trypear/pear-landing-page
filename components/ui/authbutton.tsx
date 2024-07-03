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
    <div className="hidden flex-row items-center space-x-1 text-secondary-600 dark:text-white-300 md:flex">
      {error || !data?.user ? (
        <div className="flex flex-row items-center space-x-1">
          <CircleUserRound strokeWidth={1} className="h-5 w-5" />

          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400 dark:text-gray-300 dark:hover:text-gray-300"
            href={"/signin"}
          >
            Sign in
          </Link>
          <span className="text-secondary-600 dark:text-gray-500">/</span>
          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400 dark:text-gray-300 dark:hover:text-gray-300"
            href={"/signup"}
          >
            Sign up
          </Link>
        </div>
      ) : (
        <>
          <CircleUserRound strokeWidth={1} className="h-5 w-5" />
          <Link
            className="transition duration-150 ease-in-out hover:text-secondary-400 dark:text-gray-300 dark:hover:text-gray-300"
            href={"/settings"}
          >
            Settings
          </Link>
          <span className="text-secondary-600 dark:text-gray-500">/</span>
          <form action={handleSignOut}>
            <button className="transition duration-150 ease-in-out hover:text-secondary-400 dark:text-gray-300 dark:hover:text-gray-300">
              Sign out
            </button>
          </form>
        </>
      )}
    </div>
  );
}
