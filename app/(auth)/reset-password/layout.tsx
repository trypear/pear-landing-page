import Page from "./page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Reset Password",
  description: "Reset your password",
  canonical: "/reset-password",
});

export default Page;
