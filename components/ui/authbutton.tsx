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
    <div className="hidden flex-row items-center space-x-1 md:flex">
      {error || !data?.user ? (
        <div className="flex flex-row items-center space-x-1">
          <CircleUserRound strokeWidth={1} className="h-5 w-5" />

          <Link
            className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
            href={"/signin"}
          >
            Sign in
          </Link>
          <span className="text-gray-400 opacity-50">/</span>
          <Link
            className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
            href={"/signup"}
          >
            Sign up
          </Link>
        </div>
      ) : (
        <>
          <CircleUserRound strokeWidth={1} className="h-5 w-5" />
          <Link
            className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <span className="text-gray-400 opacity-50">/</span>
          <form action={handleSignOut}>
            <button className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800">
              Sign out
            </button>
          </form>
        </>
      )}
    </div>
  );
}
