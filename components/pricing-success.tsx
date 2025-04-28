"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CONTACT_EMAIL } from "@/utils/constants";
import Link from "next/link";
import { SubscriberFeedbackForm } from "@/components/ui/subscriber-feedback-form";

export default function PricingSuccess() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard?checkout=success");
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-1 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl text-center text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1 leading-tight">
              Thank you for subscribing to PearAI!
            </h1>
          </div>

          <div className="mx-auto max-w-xl space-y-12">
            {/* Feedback Form */}
            <SubscriberFeedbackForm />

            {/* Contact info */}
            <div className="flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-center text-gray-700">
                We hope you enjoy using Pear. Feel free to send any suggestions
                our way at{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-gray-900 underline"
                >
                  {CONTACT_EMAIL}
                </Link>
                .
              </div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
