"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { signinWithOAuth } from "@/app/(auth)/actions";
import { HCAPTCHA_SITE_KEY_PUBLIC } from "@/utils/constants";
import { AdminUserAttributes, Provider } from "@supabase/supabase-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogo, GoogleLogoColored } from "@/components/ui/icons";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema, SignUpFormData } from "@/utils/form-schema";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToggle } from "@/hooks/useToggle";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captcha = useRef<HCaptcha>(null);
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      password: "",
      heard_about_us: "",
    },
  });
  const router = useRouter();

  const handleSignUp = async (data: SignUpFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (!captchaToken) {
        toast.error("Please complete the captcha challenge");
        return;
      }

      const formData = {
        email: data.email,
        password: data.password,
        user_metadata: {
          full_name: data.full_name,
          company_name: data.company_name,
          heard_about_us: data.heard_about_us,
        },
        captchaToken: captchaToken,
      };
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.error || "Failed to sign up");
        return;
      }
      if (result?.error) {
        toast.error(result.error);
        return;
      }
      toast.success(
        "Account created successfully. Please check your email to verify your account.",
      );
      form.reset();
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      captcha.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  const handleOAuthSignUp = async (provider: Provider) => {
    try {
      await signinWithOAuth(provider);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1">Ready to build?</h1>
          </div>
          <div className="mx-auto max-w-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignUp("google");
              }}
            >
              <Button
                type="submit"
                size="lg"
                variant="authgroup"
                className="relative flex w-full items-center rounded-md px-0"
              >
                <GoogleLogoColored className="text-white mx-1 h-4 w-4 shrink-0" />
                <span>Sign up with Google</span>
              </Button>
            </form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignUp("github");
              }}
            >
              <div className="-mx-3 flex flex-wrap">
                <div className="mt-3 w-full px-3">
                  <Button
                    type="submit"
                    size="lg"
                    variant="authgroup"
                    className="relative flex w-full items-center rounded-md px-0"
                  >
                    <GitHubLogo className="mx-1 h-4 w-4 shrink-0 text-gray-700" />
                    <span>Sign up with Github</span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-400"
                aria-hidden="true"
              />
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-400"
                aria-hidden="true"
              />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignUp)}
                className="space-y-4"
              >
                <FormField
                  name="full_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="full_name">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          id="full_name"
                          placeholder="First and last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email *</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="helloworld@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password *</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Password (at least 8 characters)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label className="flex items-center">
                  <Checkbox
                    className="rounded"
                    checked={isPasswordVisible}
                    onCheckedChange={togglePasswordVisibility}
                  />
                  <span className="ml-2 cursor-pointer text-gray-600">
                    Show Password
                  </span>
                </Label>

                <FormField
                  name="heard_about_us"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="heard_about_us">
                        How did you hear about us?
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="heard_about_us"
                          placeholder="e.g. YouTube, Twitter, Friend, Instagram, LinkedIn, Other"
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

                <div className="text-center text-sm text-gray-600">
                  <Link
                    href="/privacy"
                    className="underline transition duration-150 ease-in-out hover:text-gray-700 hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-md"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </Button>

                <Toaster richColors />
              </form>
            </Form>

            <div className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-gray-800 underline transition duration-150 ease-in-out hover:text-primary-800"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
