"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const whitelistSchema = z.object({
  email: z.string().email({ message: "Email address is invalid." }),
});

export type WhitelistFormData = z.infer<typeof whitelistSchema>;

export default function WhitelistPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<WhitelistFormData>({
    resolver: zodResolver(whitelistSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleEmailSubmit = async (data: WhitelistFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      // const response = await fetch("/api/whitelist", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: formData.get("email") }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(
      //     errorData?.error || `HTTP error! status: ${response.status}`,
      //   );
      // }

      // const { data } = await response.json();
      // if  (data.status === "success") {
      //   router.push("/pricing");
      // } else {
      //   toast.error("Failed to add email to whitelist. Make sure it's the one you signed up with.");
      // }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md p-6">
        <h1 className="mb-6 text-center text-3xl font-semibold md:text-5xl md:font-normal">
          Seems like you found a way to skip the waitlist 👀
        </h1>
        <p className="text-center">
          Enter your email below (make sure it&apos;s the one you signed up
          with), and you&apos;ll be able to download the app{" "}
          <Link className="underline" href="/pricing">
            here
          </Link>
          .
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleEmailSubmit)}
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
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-md"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {errorMessage && (
              <p className="text-center text-red-500">{errorMessage}</p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
