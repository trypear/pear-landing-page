import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import React from "react";
import FAQComponent from "@/components/faq";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequently Asked Questions",
  canonical: "/faq",
});

export default async function FAQ() {
  return <FAQComponent />;
}
