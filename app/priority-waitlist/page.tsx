"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PriorityWaitlist() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1 leading-tight">Priority Pear Waitlist</h1>
          </div>
          <div className="mx-auto max-w-xl">
            <div className="flex items-center">
              <div className="text-gray-700">
                By confirming your spot in the Priority Pear Waitlist, you will
                receive priority to get off the waitlist and use PearAI this
                month. <br />
                <br /> The goal of the priority waitlist is to know who our most
                dedicated users are. It will cost 3$ as a way to show your
                willingness to use the product. This 3$ can then be applied to
                your PearAI Pro subscription once it&apos;s made available to
                you (we will send you a coupon code)!
              </div>
            </div>
            <div className="-mx-3 mt-11 flex flex-wrap">
              <div className="w-full px-3 text-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                >
                  <Link
                    href="https://buy.stripe.com/4gw9D68ab15M9cQ6oo"
                    target="_blank"
                  >
                    Confirm your spot in the Priority Pear Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
