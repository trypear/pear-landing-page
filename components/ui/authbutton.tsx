import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

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
    <div className="hidden md:flex">
      {error || !data?.user ? (
        <>
          <Link
            href="/signin"
            className="mx-4 my-2 inline-flex items-center justify-center rounded-sm border border-transparent bg-purple-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-purple-700"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="my-2 inline-flex items-center justify-center rounded-sm border border-transparent bg-gray-700 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-gray-800"
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/settings"
            className="mx-4 my-2 inline-flex items-center justify-center rounded-sm border border-transparent bg-purple-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-purple-700"
          >
            Settings
          </Link>
          <form action={handleSignOut}>
            <button className="my-2 inline-flex items-center justify-center rounded-sm border border-transparent bg-gray-700 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-gray-800">
              Sign out
            </button>
          </form>
        </>
      )}
    </div>
  );
}
