"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { resendConfirmationEmail } from "@/app/(auth)/actions";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function Verification() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const handleClick = () => {
    router.push("/signin");
  };

  const handleResendEmail = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const response = await resendConfirmationEmail(email as string);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("Email sent successfully");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1 leading-tight">
              We&apos;ve sent you an email for Confirmation
            </h1>
          </div>
          <div className="mx-auto max-w-xl">
            <div className="flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-gray-700">
                If you&apos;ve already confirmed your email, please sign in
                below
              </div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
            </div>
            <div className="-mx-3 mt-11 flex flex-wrap">
              <div className="w-full px-3 text-center">
                <Button
                  size={"lg"}
                  onClick={handleClick}
                  className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                >
                  Sign in
                </Button>
                <div className="mt-4 text-gray-400">
                  Make sure to check your spam folder if you don&apos;t see it!
                </div>
                {email && (
                  <div className="mt-2 text-gray-400">
                    Didn&apos;t receive an email?{" "}
                    <Button
                      onClick={() => handleResendEmail()}
                      variant={"link"}
                      className="p-0 text-gray-700 hover:text-primary-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Resending..." : "Resend email"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
