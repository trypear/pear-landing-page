import { createClient } from "@/utils/supabase/server";
import CreateTeamForm from "@/components/team/create-team-form";
import { redirect } from "next/navigation";

export default async function NewTeamPage({
  searchParams,
}: {
  searchParams: { yearly?: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const initialYearly = searchParams.yearly === "true";

  if (!user) {
    return <div>Please log in to create a team</div>;
  }

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/signin");
  };

  return (
    <section
      className="relative pt-8 sm:pt-20 md:pt-24 lg:pt-32"
      aria-labelledby="create-team-heading"
    >
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <CreateTeamForm
            user={user}
            initialYearly={initialYearly}
            handleSignOut={handleSignOut}
          />
        </div>
      </div>
    </section>
  );
}
