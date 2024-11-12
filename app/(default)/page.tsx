import Features from "@/components/features";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import { constructMetadata } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      {/* <p className="mt-8 px-4 text-center text-sm text-gray-500">
        * For more information about how integrations are built into PearAI, see{" "}
        <Link
          href="/disclaimer"
          className="text-primary-700 underline hover:text-primary-800"
        >
          here
        </Link>
        .
      </p> */}
    </>
  );
}
