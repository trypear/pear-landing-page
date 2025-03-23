"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { resetPassword } from "@/app/(auth)/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { HCAPTCHA_SITE_KEY_PUBLIC } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/utils/form-schema";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string>();
  const captcha = useRef<HCaptcha>(null);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccessMessage(
        "Password reset instructions have been sent to your email.",
      );
    }
  }, [searchParams]);
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    if (isSubmitting) {
      console.log("Already submitting, returning");
      return;
    }

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("captchaToken", captchaToken);
      const response = await resetPassword(formData);
      if (response?.error) {
        setErrorMessage(response.error);
      }
      // No need to handle success case as it will redirect
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      captcha.current?.resetCaptcha();
      setCaptchaToken(undefined);
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1 mb-4">Forgot your password?</h1>
            <p className="text-xl text-gray-500">
              We&apos;ll email you instructions on how to reset it.
            </p>
          </div>

          {/* Success View or Form */}
          <div className="mx-auto max-w-sm">
            {successMessage.length > 0 ? (
              <div className="text-center">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-12 w-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="mb-6 text-lg text-green-500">{successMessage}</p>
                <Link
                  href="/"
                  className="text-gray-700 transition duration-150 ease-in-out hover:text-primary-800"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      localStorage.removeItem("resetPasswordSuccess");
                    }
                  }}
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleResetPassword)}
                    className="space-y-4"
                  >
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@yourcompany.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <HCaptcha
                        ref={captcha}
                        sitekey={HCAPTCHA_SITE_KEY_PUBLIC}
                        onVerify={(token) => {
                          setCaptchaToken(token);
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-md"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Resetting..." : "Reset Password"}
                    </Button>

                    {errorMessage && (
                      <p className="text-center text-red-500">{errorMessage}</p>
                    )}
                  </form>
                </Form>

                <div className="mt-6 text-center text-gray-400">
                  <Link
                    href="/"
                    className="text-gray-700 transition duration-150 ease-in-out hover:text-primary-800"
                  >
                    Cancel
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
