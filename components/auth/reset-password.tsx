"use client";
import Link from "next/link";
import { useState } from "react";
import { resetPassword } from "@/app/(auth)/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
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
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", data.email);

    const response = await resetPassword(formData);

    if (response?.error) {
      form.setError("email", {
        type: "manual",
        message: response.error,
      });
    } else {
      form.reset({ email: "" });
    }

    setIsSubmitting(false);
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleResetPassword)}>
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
                              placeholder="you@yourcompany.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="-mx-3 mt-6 flex flex-wrap">
                  <div className="w-full px-3">
                    <Button
                      size={"lg"}
                      className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Resetting" : "Reset Password"}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
            <div className="mt-6 text-center text-gray-400">
              <Link
                href="/"
                className="text-primary-700 transition duration-150 ease-in-out hover:text-primary-800"
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
