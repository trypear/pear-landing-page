"use client";
import Link from "next/link";
import { useState } from "react";
import { signinWithGoogle, signup } from "@/app/(auth)/actions";
import { GoogleLogo } from "../ui/icons";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const formData = new FormData(e.currentTarget);
    const response = await signup(formData);
    if (response) {
      setErrorMessage(response.error);
    }
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
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">
              Ready to speed up your development experience?
            </h1>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-sm">
            <form onSubmit={handleGoogleSignUp}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn text-white relative flex w-full items-center bg-red-600 px-0 hover:bg-red-700">
                    <GoogleLogo className="text-white mx-4 h-4 w-4 shrink-0 opacity-75" />
                    <span
                      className="border-white mr-4 flex h-6 items-center border-r border-opacity-25"
                      aria-hidden="true"
                    ></span>
                    <span className="-ml-16 flex-auto pl-16 pr-8">
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-300"
                    htmlFor="full-name"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    name="full-name"
                    className="form-input w-full text-gray-300"
                    placeholder="First and last name"
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-300"
                    htmlFor="company-name"
                  >
                    Company Name
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    name="company-name"
                    className="form-input w-full text-gray-300"
                    placeholder="Your company or app name"
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-300"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-gray-300"
                    placeholder="helloworld@email.com"
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-300"
                    htmlFor="password"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    required
                  />
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                <Link
                  href="/privacy"
                  className="text-gray-400 underline transition duration-150 ease-in-out hover:text-gray-200 hover:no-underline"
                >
                  Privacy Policy
                </Link>
              </div>
              {errorMessage && (
                <div className="text-center text-sm text-red-600">
                  {errorMessage}
                </div>
              )}
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn text-white w-full bg-purple-600 hover:bg-purple-700">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center text-gray-400">
              Already using PearAI?{" "}
              <Link
                href="/signin"
                className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
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
