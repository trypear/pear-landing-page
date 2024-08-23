// src/app/docs/page.tsx
import DocsComponent from "@/components/docs/docs";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Documentation",
  description: "Documentation for PearAI features and contributors",
  canonical: "/docs",
});

export default function Docs() {
  return (
    <>
      <DocsComponent />
    </>
  );
}
