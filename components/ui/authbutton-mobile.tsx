import Link from "next/link";
import { Button } from "./button";

export default function AuthButtonMobile({
  setMobileNavOpen,
  handleSignOut,
  supabaseUser,
}: any) {
  if (supabaseUser.error || !supabaseUser.data?.user) {
    return (
      <>
        <Button asChild className="w-full rounded-full">
          <Link onClick={() => setMobileNavOpen(false)} href={"/signin"}>
            Sign In
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link onClick={() => setMobileNavOpen(false)} href={"/signup"}>
            Sign Up
          </Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Button asChild className="w-full rounded-full">
        <Link onClick={() => setMobileNavOpen(false)} href={"/settings"}>
          Settings
        </Link>
      </Button>
      <Button asChild variant="outline" className="w-full">
        <form action={handleSignOut}>
          <button>Sign Out</button>
        </form>
      </Button>
    </>
  );
}
