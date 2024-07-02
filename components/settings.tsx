"use client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type SettingsPageProps = {
  user: User;
};

export default function SettingsPage({ user }: SettingsPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Open pearai app on desktop
    const callback = searchParams.get("callback");
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (callback && accessToken && refreshToken) {
      router.push(`${callback}/${accessToken}/${refreshToken}`);
      // TODO: clear the tokens from query?
    } else if (callback) {
      // Alert user if callback is present but either accessToken or refreshToken is null
      alert(
        "Access token or refresh token is missing. Cannot open PearAI app.",
      );
    }
  }, [router, searchParams]);

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
                      <td>{user.user_metadata.full_name}</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email:</span>{" "}
                      </td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
                {user.app_metadata.provider === "email" && (
                  <Button size="sm" className="mt-4">
                    <Link href="/update-password">Update Password</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Usage */}
            <div className="flex flex-col rounded-md border p-3">
              <h3 className="mb-3 text-2xl font-semibold">Usage</h3>
              <div className="flex h-full flex-col justify-between">
                {/* Show only if the user already has a subscription */}
                <p className="font-small">Coming soon</p>

                {process.env.VERCEL_ENV !== "production" && (
                  <Button asChild size="sm" className="mb-1 max-w-max">
                    {/* Show only if the user does not have a subscription */}
                    {/* TODO: Link to pricing page */}
                    <Link href="/pricing">Upgrade to Pro</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
