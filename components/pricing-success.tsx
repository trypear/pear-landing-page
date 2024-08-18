"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CONTACT_EMAIL } from "@/utils/constants";
import Link from "next/link";

export default function PricingSuccess() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard?checkout=success");
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1 leading-tight">
              Thank you for subscribing to PearAI!
            </h1>
          </div>
          <div className="mx-auto max-w-xl">
            <div className="flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-center text-gray-700">
                We hope you enjoy using Pear. Feel free to send any suggestions
                our way at{" "}
                <Link
                  href={`mailto:{CONTACT_EMAIL}`}
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
            <div className="-mx-3 mt-11 flex flex-wrap">
              <div className="w-full px-3 text-center">
                <Button
                  size={"lg"}
                  onClick={handleClick}
                  className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                >
                  Go to dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
