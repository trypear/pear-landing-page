import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-12">
            <h1 className="text-4xl font-semibold md:text-5xl md:font-normal">
              Settings
            </h1>
          </div>

          {/* Settings */}
          <div className="mx-auto mb-4 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Basic Info */}
            <div className="rounded-md border p-4">
              <h3 className="mb-3 text-2xl font-semibold">Basic Info</h3>
              <div className="overflow-x-auto">
                <table>
                  <tbody className="text-sm">
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Full Name:</span>{" "}
                      </td>
                      <td>{data.user.user_metadata.full_name}</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email:</span>{" "}
                      </td>
                      <td>{data.user.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usage */}
            <div className="flex flex-col justify-between rounded-md border p-3">
              <h3 className="mb-3 text-2xl font-semibold">Usage</h3>

              {/* Show only if the user already has a subscription */}
              {/* <p className="font-medium">Coming soon</p> */}

              {/* Show only if the user does not have a subscription */}
              <Button asChild size="sm" className="max-w-max">
                {/* TODO: Link to pricing page */}
                <Link href="#">Upgrade to Pro</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
