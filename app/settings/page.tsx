import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Settings() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !sessionData?.session) {
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
              <div className="overflow-x-hidden">
                <table className="table-auto w-full">
                  <tbody className="text-sm">
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Full Name:</span>{" "}
                      </td>
                      <td className="break-all">{data.user.user_metadata.full_name}</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email:</span>{" "}
                      </td>
                      <td className="break-all">{data.user.email}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <p className="mb-1 text-sm font-medium text-black-300 break-all">
                          PearAI Token: {sessionData.session.access_token}
                        </p>
                        <p className="mb-1 text-sm font-medium text-black-300 break-all">
                          PearAI Refresh Token: {sessionData.session.refresh_token}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {data.user.app_metadata.provider === "email" && (
                  <Button size="sm" className="mt-4">
                    <Link href="/update-password">Update Password</Link>
                  </Button>
                )}
              </div>
            </div>



            {/* Usage */}
            <div className="flex flex-col rounded-md border p-3">
              <h3 className="mb-3 text-2xl font-semibold">Usage</h3>

              {/* Show only if the user already has a subscription */}
              <p className="font-small">Coming soon</p>

              {process.env.VERCEL_ENV !== "production" && (
                <Button asChild size="sm" className="max-w-max">
                  {/* Show only if the user does not have a subscription */}
                  {/* TODO: Link to pricing page */}
                  <Link href="/pricing">Upgrade to Pro</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
