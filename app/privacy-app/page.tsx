// src/app/privacy-policy-app/page.tsx
import PrivacyPolicyAppComponent from "@/components/privacy-policy-app";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "App Privacy Policy",
  description: "The privacy policy for the main app of PearAI.",
  canonical: "/privacy-app",
});

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyAppComponent />
    </>
  );
}
