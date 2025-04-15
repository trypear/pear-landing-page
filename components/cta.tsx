"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="showcase-gradient-light relative mx-auto flex min-h-[80vh] w-full max-w-full items-center justify-center sm:min-h-[100vh]">
      <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center lg:max-w-[1049px]">
        <p className="text-4xl font-semibold text-black sm:text-6xl">
          Make Your Next Project Today.
        </p>

        <p className="mt-4 text-xl font-semibold text-[#666666] sm:text-[32px]">
          Try PearAI for free.
        </p>

        <div className="mt-10 flex flex-col p-4">
          <Button className="bg-black px-20 py-[22px] text-sm font-semibold hover:bg-black sm:text-base">
            <Link href="/pricing">Download</Link>
          </Button>

          <a
            href="https://trypear.ai/docs/contributors"
            className="mt-1 text-black underline underline-offset-1 hover:decoration-black/20"
          >
            Interested in contributing?
          </a>
        </div>
      </div>
    </div>
  );
}
