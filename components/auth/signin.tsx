"use client";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signin, signinWithOAuth } from "@/app/(auth)/actions";
import { Provider } from "@supabase/supabase-js";
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
import { SignInFormData, signInSchema } from "@/utils/form-schema";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackForDesktopApp = searchParams.get("callback") ?? "";

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: SignInFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await signin(formData, callbackForDesktopApp);
      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        form.reset();
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setErrorMessage(null);
    try {
      await signinWithOAuth(provider, callbackForDesktopApp);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="md:pb-17 mx-auto max-w-3xl pb-10 text-center text-3xl lg:text-4xl">
            <h1 className="h1">Welcome back</h1>
          </div>

          <div className="mx-auto max-w-sm">
            <form onSubmit={(e) => handleOAuthSignIn("google")}>
              <Button
                type="submit"
                size="lg"
                variant="destructive"
                className="relative flex w-full items-center rounded-md px-0"
              >
                <GoogleLogo className="text-white mx-4 h-4 w-4 shrink-0" />
                <span
                  className="border-white mr-4 flex h-6 items-center border-r border-opacity-25"
                  aria-hidden="true"
                />
                <span className="-ml-16 flex-auto pl-16 pr-8">
                  Sign in with Google
                </span>
              </Button>
            </form>
            <form onSubmit={(e) => handleOAuthSignIn("github")}>
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
                      Sign in with GitHub
                    </span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700 dark:border-gray-500"
                aria-hidden="true"
              />
              <div className="text-gray-700 dark:text-gray-500">
                Or, sign in with your email
              </div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700 dark:border-gray-500"
                aria-hidden="true"
              />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignIn)}
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
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-500">
                      Keep me signed in
                    </span>
                  </label>
                  <Link
                    href="/reset-password"
                    className="text-primary-700 transition duration-150 ease-in-out hover:text-primary-800"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-md"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>

                {errorMessage && (
                  <p className="text-center text-red-500">{errorMessage}</p>
                )}
              </form>
            </Form>

            <div className="mt-6 text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary-700 transition duration-150 ease-in-out hover:text-primary-800"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
