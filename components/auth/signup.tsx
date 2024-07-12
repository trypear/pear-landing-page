"use client";
import Link from "next/link";
import { useState } from "react";
import { signup, signinWithOAuth } from "@/app/(auth)/actions";
import { Provider } from "@supabase/supabase-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogo, GoogleLogo } from "@/components/ui/icons";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema, SignUpFormData } from "@/utils/form-schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      password: "",
    },
  });
  const router = useRouter();

  const handleSignUp = async (data: SignUpFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("full-name", data.full_name);
      formData.append("email", data.email);
      formData.append("company-name", data.company_name || "");
      formData.append("password", data.password);

      const response = await signup(formData);
      if (response?.error) {
        setErrorMessage(response.error);
      } else if (!response?.signedIn) {
        if (response?.exists) {
          toast.error("An account with this email already exists.");
          // Redirect to sign in page
          router.push("/signin");
        } else {
          toast.success(
            "Account created successfully. Please check your email to verify your account.",
          );
          form.reset();
        }
      } else {
        // Redirect to settings
        toast.info(
          "An account with this email already exists, signing you in...",
        );
        router.push("/settings");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuthSignUp = async (provider: Provider) => {
    setErrorMessage(null);
    try {
      await signinWithOAuth(provider);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1">
              Ready to speed up your development experience?
            </h1>
          </div>

          <div className="mx-auto max-w-sm">
            <form onSubmit={(e) => handleOAuthSignUp("google")}>
              <Button
                type="submit"
                size="lg"
                variant="danger"
                className="relative flex w-full items-center rounded-md px-0"
              >
                <GoogleLogo className="text-white mx-4 h-4 w-4 shrink-0" />
                <span
                  className="border-white mr-4 flex h-6 items-center border-r border-opacity-25"
                  aria-hidden="true"
                />
                <span className="-ml-16 flex-auto pl-16 pr-8">
                  Sign up with Google
                </span>
              </Button>
            </form>
            <form onSubmit={(e) => handleOAuthSignUp("github")}>
              <div className="-mx-3 flex flex-wrap">
                <div className="mt-6 w-full px-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="relative flex w-full items-center rounded-md bg-gray-700 px-0 text-white-main hover:bg-gray-800"
                  >
                    <GitHubLogo className="text-white mx-4 h-4 w-4 shrink-0" />
                    <span
                      className="border-white mr-4 flex h-6 items-center border-r border-opacity-25"
                      aria-hidden="true"
                    />
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Sign up with GitHub
                    </span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              />
              <div className="text-gray-700">Or, register with your email</div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
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
                      <FormLabel htmlFor="full_name">Full Name</FormLabel>
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
                  name="company_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="company_name">Company Name</FormLabel>
                      <FormControl>
                        <Input
                          id="company_name"
                          placeholder="Your company or app name"
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
                      <FormLabel htmlFor="email">Email</FormLabel>
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
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password (at least 8 characters)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center text-sm text-gray-500">
                  <Link
                    href="/privacy"
                    className="text-gray-400 underline transition duration-150 ease-in-out hover:text-gray-500 hover:no-underline"
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

                {errorMessage && (
                  <p className="text-center text-red-500">{errorMessage}</p>
                )}
              </form>
            </Form>

            <div className="mt-6 text-center text-gray-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-primary-700 transition duration-150 ease-in-out hover:text-primary-800"
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
