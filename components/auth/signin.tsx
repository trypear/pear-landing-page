"use client";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signin, signinWithOAuth } from "@/app/(auth)/actions";
import { Provider } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { GitHubLogo, GoogleLogoColored } from "@/components/ui/icons";
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
import { useToggle } from "@/hooks/useToggle";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/utils/constants";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn({
  turnstile,
}: {
  turnstile?: React.MutableRefObject<TurnstileInstance | null>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackForDesktopApp = searchParams?.get("callback") ?? "";
  const [captchaToken, setCaptchaToken] = useState("");

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

      const response = await signin(
        formData,
        callbackForDesktopApp,
        captchaToken,
      );
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

  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  const onReset = () => {
    turnstile?.current?.reset();
    setCaptchaToken("");
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="md:pb-17 mx-auto max-w-3xl pb-10 text-center text-3xl lg:text-4xl">
            <h1 className="h1">Welcome back</h1>
          </div>

          <div className="mx-auto max-w-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignIn("google");
              }}
            >
              <Button
                type="submit"
                size="lg"
                variant="authgroup"
                className="relative flex w-full items-center rounded-md px-0"
              >
                <GoogleLogoColored className="text-white mx-1 h-4 w-4 shrink-0" />
                <span className="">Sign in with Google</span>
              </Button>
            </form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignIn("github");
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
                    <span className="">Sign in with GitHub</span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-400"
                aria-hidden="true"
              />
              <div className="text-gray-400">Or, sign in with your email</div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-400"
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
                        <div className="relative">
                          <Input
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="********"
                            className="pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility()}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {isPasswordVisible ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-start">
                    <Label className="flex items-center">
                      <Checkbox className="rounded" />
                      <span className="ml-2 cursor-pointer text-gray-600">
                        Keep me signed in
                      </span>
                    </Label>
                  </div>

                  <div className="my-3 text-center">
                    <Link
                      href="/reset-password"
                      className="text-sm text-gray-600 transition duration-150 ease-in-out"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Turnstile
                    siteKey={TURNSTILE_SITE_KEY ?? ""}
                    onSuccess={setCaptchaToken}
                    className="mx-auto"
                    onError={() => {
                      toast.error("Captcha verification failed");
                      onReset();
                    }}
                    onExpire={() => {
                      toast.warning("Captcha expired, please try again");
                      onReset();
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-md"
                  disabled={isSubmitting || !captchaToken}
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>

                {errorMessage && (
                  <p className="text-center text-red-500">{errorMessage}</p>
                )}
              </form>
            </Form>

            <div className="mt-6 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
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
