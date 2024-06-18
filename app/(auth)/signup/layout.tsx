import Page from "./page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Sign Up",
  description: "Sign up for an account",
  canonical: "/signup",
});

export default Page;
