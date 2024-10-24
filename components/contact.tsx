"use client";
import Link from "next/link";
import { useState } from "react";
import { signup, signinWithOAuth, contactSubmit } from "@/app/(auth)/actions";
import { Provider } from "@supabase/supabase-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema, ContactFormData } from "@/utils/form-schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const organisationSizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1001+", label: "1001+ employees" },
];

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      organisation_size: "",
      phone_number: "",
      message: "",
    },
  });
  const router = useRouter();

  const handleContactSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("first-name", data.first_name);
      formData.append("last-name", data.last_name);
      formData.append("email", data.email);
      formData.append("job-title", data.job_title);
      formData.append("company-name", data.company_name || "");
      formData.append("organisation-size", data.organisation_size);
      formData.append("phone-number", data.phone_number || "");
      formData.append("message", data.message);

      const response = await contactSubmit(formData);
      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        toast.success("Successfully submitted! We will get back to you soon.");
        router.push("/about");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="md:pt-30 pb-12 pt-24 md:pb-16">
          <div className="md:pb-15 mx-auto max-w-3xl pb-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Looking for a <span className="text-primary-700">custom</span>{" "}
              pricing option? Get in touch!
            </h1>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="my-6 flex items-center">
              <div
                className="mr-3 grow border-t border-solid border-gray-400"
                aria-hidden="true"
              />
              <div className="text-gray-600">
                Please contact us using the form below
              </div>
              <div
                className="ml-3 grow border-t border-solid border-gray-400"
                aria-hidden="true"
              />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleContactSubmit)}
                className="space-y-4"
              >
                <FormField
                  name="first_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="first_name">
                        First Name <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="first_name"
                          placeholder="First name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="last_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="last_name">
                        Last Name <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="last_name"
                          placeholder="Last name"
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
                      <FormLabel htmlFor="email">
                        Work Email <span className="text-red-600"> *</span>
                      </FormLabel>
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
                  name="job_title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="job_title">
                        Job Title <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="job_title"
                          placeholder="Your job title"
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
                      <FormLabel htmlFor="company_name">
                        Company Name <span className="text-red-600"> *</span>
                      </FormLabel>
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
                  name="organisation_size"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="organisation_size">
                        Organisation Size{" "}
                        <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Select id="organisation_size" {...field}>
                          <option value="" disabled>
                            Select your organisation size
                          </option>
                          {organisationSizes.map((size) => (
                            <option key={size.value} value={size.value}>
                              {size.label}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone_number"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="phone_number">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          id="phone_number"
                          placeholder="Your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">
                        Message <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <textarea
                          id="message"
                          placeholder="Describe your needs here"
                          className="h-36 w-full resize-none rounded-md border border-gray-200 p-3 text-sm"
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
      </div>
    </section>
  );
}
