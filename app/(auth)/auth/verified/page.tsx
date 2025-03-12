"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VerifiedPage() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("verificationEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const signInWithToken = async () => {
    if (!email) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        toast.error(
          "Failed to sign in automatically. Please sign in manually.",
        );
        router.push(`/signin?email=${encodeURIComponent(email)}`);
        return;
      }

      toast.success("Magic link sent! Check your email to complete sign in.");
    } catch (error) {
      toast.error("An error occurred. Please sign in manually.");
      router.push(`/signin?email=${encodeURIComponent(email)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 text-primary-700 dark:text-primary-400">
          Email Verified Successfully!
        </h2>
        <p className="mt-5 text-center text-lg text-gray-600 dark:text-gray-300">
          Your email has been verified and your account is now active.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {email ? (
            <>
              <Button
                onClick={signInWithToken}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending magic link..." : "Sign In Automatically"}
              </Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                We&apos;ll send a magic link to your email for a seamless login.
              </p>
            </>
          ) : (
            <Link href="/signin">
              <Button className="w-full">Sign In Now</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
