'use client';
import Link from 'next/link'
import {useState} from 'react'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Forgot your password?</h1>
            <p className="text-xl text-gray-400">We'll email you instructions on how to reset it.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              {errorMessage && <div className="text-red-500 text-sm text-center">{errorMessage}</div>}
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link href="/" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
