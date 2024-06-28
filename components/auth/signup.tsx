"use client";
import Link from "next/link";
import { useState } from "react";
import { signinWithGoogle, signup } from "@/app/(auth)/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { GoogleLogo } from "../ui/icons";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema, SignUpFormData } from "@/utils/form-schema";

export default function SignUp() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      password: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (data: SignUpFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("full-name", data.full_name);
    formData.append("email", data.email);
    formData.append("company-name", data.company_name);
    formData.append("password", data.password);

    const response = await signup(formData);
    if (response?.error) {
      form.setError("full_name", {
        type: "manual",
        message: response.error,
      });
      form.setError("email", {
        type: "manual",
        message: response.error,
      });
      form.setError("company_name", {
        type: "manual",
        message: response.error,
      });
      form.setError("password", {
        type: "manual",
        message: response.error,
      });
    } else {
      form.reset({ full_name: "", email: "", company_name: "", password: "" });
    }

    setIsSubmitting(false);
  };

  const handleGoogleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signinWithGoogle();
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1">
              Ready to speed up your development experience?
            </h1>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-sm">
            <form onSubmit={handleGoogleSignUp}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                  <Button
                    size={"lg"}
                    className="relative flex w-full items-center bg-red-600 px-0 text-white-main hover:bg-red-700 hover:shadow-sm"
                  >
                    <GoogleLogo className="text-white mx-4 h-4 w-4 shrink-0" />
                    <span
                      className="border-white mr-4 flex h-6 items-center border-r border-opacity-25"
                      aria-hidden="true"
                    ></span>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Sign up with Google
                    </span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-gray-700">Or, register with your email</div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSignUp)}>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <FormField
                      name="full_name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              id="full_name"
                              {...field}
                              placeholder="First and last name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <FormField
                      name="company_name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              id="company_name"
                              {...field}
                              placeholder="Your company or app name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              {...field}
                              placeholder="helloworld@email.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <FormField
                      name="password"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              id="password"
                              type="password"
                              {...field}
                              placeholder="Password (at least 8 characters)"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <Link
                    href="/privacy"
                    className="text-gray-400 underline transition duration-150 ease-in-out hover:text-gray-500 hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="-mx-3 mt-6 flex flex-wrap">
                  <div className="w-full px-3">
                    <Button
                      size={"lg"}
                      className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing up..." : "Sign Up"}
                    </Button>
                  </div>
                </div>
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
