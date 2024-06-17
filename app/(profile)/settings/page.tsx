import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Settings() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">Settings</h1>
          </div>

          {/* Settings */}
          <div className="mx-auto max-w-sm">
            <div className="-mx-3 mb-4 flex flex-wrap">
              <div className="w-full px-3">
                <p className="mb-1 text-sm font-medium text-gray-300">
                  Full Name: {data.user.user_metadata.full_name}
                </p>
                <p className="mb-1 text-sm font-medium text-gray-300">
                  Email: {data.user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
