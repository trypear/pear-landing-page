"use client";
import Link from "next/link";
import { useState } from "react";
import { resetPassword } from "@/app/(auth)/actions";

export default function ResetPassword() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const formData = new FormData(e.currentTarget);
    const response = await resetPassword(formData);
    if (response) {
      setErrorMessage(response.error);
    }
  };
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1 mb-4">Forgot your password?</h1>
            <p className="text-xl text-gray-400">
              We&apos;ll email you instructions on how to reset it.
            </p>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-sm">
            <form onSubmit={handleSubmit}>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    required
                  />
                </div>
              </div>
              {errorMessage && (
                <div className="text-center text-sm text-red-500">
                  {errorMessage}
                </div>
              )}
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn w-full bg-purple-600 text-white hover:bg-purple-700">
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center text-gray-400">
              <Link
                href="/"
                className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
