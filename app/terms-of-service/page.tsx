// src/app/privacy-policy/page.tsx
import TermsOfServiceComponent from "@/components/terms-of-service";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: "The terms of service for PearAI.",
  canonical: "/terms-of-service",
});

export default function TermsOfService() {
  return (
    <>
      <TermsOfServiceComponent />
    </>
  );
}
