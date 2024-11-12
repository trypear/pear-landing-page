import Features from "@/components/features";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import { constructMetadata } from "@/lib/utils";
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
    </>
  );
}
