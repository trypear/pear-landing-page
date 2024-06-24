import Page from "./page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Settings",
  description: "Settings for your account.",
  canonical: "/settings",
});

export default Page;
