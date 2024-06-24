import Page from "./page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Sign In",
  description: "Sign in to your account",
  canonical: "/signin",
});

export default Page;
