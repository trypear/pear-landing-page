"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PriorityWaitlist() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="block items-center justify-center md:pb-15 mx-auto max-w-3xl pb-8 text-center space-y-2.5">
            <h1 className="text-3xl lg:text-4xl h1 font-semibold leading-tight">Priority Pear Waitlist</h1>

            <Badge variant="primary">
              Early Access
            </Badge>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <p className="text-gray-700">
              By confirming your spot in the Priority Pear Waitlist, you will receive priority to get off the waitlist and use PearAI this month.
              <br />
              <br />
              The 3$ cost can be applied to your PearAI Pro subscription once it&apos;s made available to you (we will send you a coupon code)!
            </p>

            <div className="mt-11">
              <Button
                asChild
                size="lg"
                variant="default"
                className="w-max"
              >
                <Link
                  href="https://buy.stripe.com/4gw9D68ab15M9cQ6oo"
                  target="_blank"
                >
                  Join the Priority Waitlist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
