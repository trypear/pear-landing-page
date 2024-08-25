"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PriorityWaitlist() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto block max-w-3xl items-center justify-center space-y-2.5 pb-8 text-center">
            <h1 className="h1 text-3xl font-semibold leading-tight lg:text-4xl">
              Priority Pear Waitlist
            </h1>
            <Badge variant="primary">Early Access</Badge>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <p className="text-gray-700">
              By confirming your spot in the Priority Pear Waitlist, you will be
              able to get off the waitlist immediately.
              <br />
              <br />
              Simply send your email to pear@trypear.ai or directly ping Pan or
              Nang in our{" "}
              <Link
                href="https://discord.com/invite/7QMraJUsQt"
                className="text-link"
                target="_blank"
              >
                Discord
              </Link>
              . Please make sure you&apos;re also signed up on the&nbsp;
              <Link
                href="https://forms.gle/171UyimgQJhEJbhU7"
                className="text-link"
                target="_blank"
              >
                regular waitlist form
              </Link>
              .
            </p>

            <div className="mt-11">
              <Button asChild size="lg" variant="default" className="w-max">
                <Link
                  href="https://buy.stripe.com/4gw9D68ab15M9cQ6oo"
                  target="_blank"
                >
                  Confirm Priority Waitlist
                  <ExternalLink size={"16"} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
