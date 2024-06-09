// src/app/privacy-policy/page.tsx
import PrivacyPolicyComponent from "@/components/privacy-policy"
import { constructMetadata } from "@/lib/utils"
import { Metadata } from "next/types"

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "The privacy policy for our website.",
  canonical: "/privacy-policy",
})

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyComponent />
    </>
  )
}
