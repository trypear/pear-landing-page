import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function AuthButton() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="hidden md:flex">
      {error || !data?.user ? (
        <>
          <Link
            href="/signin"
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 ml-2 rounded-sm text-white bg-gray-700 hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Sign up
          </Link>
        </>
      ) : (
        <Link
          href="/"
          className="font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
        >
          Dashboard
        </Link>
      )}
    </div>
  );
}
