import Page from "./page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Extension Auth",
  description: "Sign in to extension",
  canonical: "/extension-callback",
});

export default Page;
