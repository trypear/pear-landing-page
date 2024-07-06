"use client";
import { Session, User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

type SettingsPageProps = {
  initialSession: Session;
};

export default function SettingsPage({ initialSession }: SettingsPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const session = initialSession;

  useEffect(() => {
    async function fetchUserAndHandleCallback() {
      try {
        if (session) {
          setUser(session.user);

          // Handle callback
          const callback = searchParams.get("callback");
          if (callback) {
            console.log("Handling callback:", callback);
            const { access_token, refresh_token } = session;

            // TODO: FIGURE THIS OUT
            // http://localhost:3000/signin?callback=code-oss://pearai.pearai/auth

            // Here, use a secure method to pass these tokens to your desktop app
            // For example, if you're using Electron:
            // if (window.electron) {
            //   console.log("Sending auth tokens to desktop app");
            //   window.electron.send("auth-tokens", {
            //     access_token,
            //     refresh_token,
            //   });
            // }

            // or just send it with the tokens
            // code-oss://pearai.pearai/auth?accessToken=<ACCESS_TOKEN>&refreshToken=<REFRESH_TOKEN>

            // console.log(
            //   "Redirecting to callback:",
            //   callback +
            //     "?accessToken=" +
            //     access_token +
            //     "&refreshToken=" +
            //     refresh_token,
            // );
            router.push(
              `${callback}?accessToken=${access_token}&refreshToken=${refresh_token}`,
            );

            // Clear the callback from the URL
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.delete("callback");
            router.replace(newUrl.toString(), undefined);

            // Redirect to the callback URL
            window.location.href = callback;
          }
        } else {
          // Handle error or redirect to login
          console.error("Failed to fetch user");
          router.push("/signin");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        router.push("/signin");
      } finally {
        setLoading(false);
      }
    }

    fetchUserAndHandleCallback();
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
                      <td>
                        {loading ? (
                          <Skeleton className="h-4 w-[200px]" />
                        ) : (
                          user?.user_metadata.full_name
                        )}
                      </td>{" "}
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pr-1">
                        <span className="text-gray-500">Email:</span>{" "}
                      </td>
                      <td>
                        {loading ? (
                          <Skeleton className="h-4 w-[200px]" />
                        ) : (
                          user?.email
                        )}
                      </td>{" "}
                    </tr>
                  </tbody>
                </table>
                {user?.app_metadata.provider === "email" && (
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
