"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define validation schema (all fields required)
const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  discord: z.string().min(2, "Please enter your Discord username."),
  os: z.enum(["Windows", "Mac M-Chip", "Mac Intel Chip", "Linux"], {
    errorMap: () => ({ message: "Select your Operating System." }),
  }),
  experience: z.enum(
    [
      "No Experience (0 years)",
      "Beginner (1-3 years)",
      "Intermediate (3-5 years)",
      "Advanced (5+ years)",
    ],
    { errorMap: () => ({ message: "Select your coding experience level." }) },
  ),
});

type BetaTesterFormValues = z.infer<typeof formSchema>;

export function BetaTesterSignupForm() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const form = useForm<BetaTesterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      discord: "",
      os: undefined,
      experience: undefined,
    },
  });

  async function onSubmit(values: BetaTesterFormValues) {
    setStatus("submitting");
    setError(null);

    try {
      // Insert application via Supabase (like subscriber feedback)
      const { error: dbError } = await supabase
        .from("beta_tester_applications")
        .insert({
          name: values.name,
          email: values.email,
          discord: values.discord,
          os: values.os,
          experience: values.experience,
        });
      if (dbError) {
        setStatus("error");
        setError("Failed to submit form. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError("Failed to submit form. Please try again later.");
    }
  }

  return (
    <div className="my-4 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white space-y-6 rounded-xl border border-gray-200 p-6 shadow"
        >
          <div className="mb-2 text-center text-2xl font-semibold text-black">
            Apply to become a Beta Tester
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    disabled={status === "submitting"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email{" "}
                  <span className="text-xs text-gray-400">
                    (used for your PearAI Account)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    disabled={status === "submitting"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discord"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Discord{" "}
                  <span className="text-xs text-gray-400">
                    (make sure you&apos;re in the{" "}
                    <a
                      href="https://discord.gg/7QMraJUsQt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 underline hover:text-primary-800"
                    >
                      PearAI server
                    </a>
                    )
                  </span>
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="e.g. PearAI#1234"
                    disabled={status === "submitting"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="os"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OS</FormLabel>
                <Select
                  disabled={status === "submitting"}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select OS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Windows">Windows</SelectItem>
                    <SelectItem value="Mac M-Chip">Mac M-Chip</SelectItem>
                    <SelectItem value="Mac Intel Chip">
                      Mac Intel Chip
                    </SelectItem>
                    <SelectItem value="Linux">Linux</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level Coding</FormLabel>
                <Select
                  disabled={status === "submitting"}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No Experience (0 years)">
                      No Experience (0 years)
                    </SelectItem>
                    <SelectItem value="Beginner (1-3 years)">
                      Beginner (1-3 years)
                    </SelectItem>
                    <SelectItem value="Intermediate (3-5 years)">
                      Intermediate (3-5 years)
                    </SelectItem>
                    <SelectItem value="Advanced (5+ years)">
                      Advanced (5+ years)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {status === "success" && (
            <div className="text-center text-sm font-bold text-green-600">
              Thanks! Your application has been submitted. We appreciate your
              interest.
            </div>
          )}
          {status === "error" && (
            <div className="text-center text-sm font-bold text-red-600">
              {error}
            </div>
          )}
          <Button
            type="submit"
            disabled={status === "submitting"}
            size="lg"
            className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
