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
  }

  return (
    <div className="hidden md:flex">
      {error || !data?.user ? (
        <>
          <Link
            href="/signin"
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 mx-4 rounded-sm text-secondary-main bg-primary-500 hover:bg-primary-600 transition duration-150 ease-in-out"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2  rounded-sm text-white-main bg-secondary-main hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/settings"
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 mx-4 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
          >
            Settings
          </Link>
        <form action={handleSignOut}>
          <button
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2  rounded-sm text-white bg-gray-700 hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Sign out
          </button>
        </form>
        </>
      )}
    </div>
  );
}
