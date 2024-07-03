import PricingPage from "@/components/pricing";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import dynamic from "next/dynamic";

export const metadata: Metadata = constructMetadata({
  title: "Pricing",
  description: "The pricing for PearAI.",
  canonical: "/pricing",
});

export default function Pricing() {
  return (
    <>
      <PricingPage />
    </>
  );
}
