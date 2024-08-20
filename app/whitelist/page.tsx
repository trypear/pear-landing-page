import WhitelistPage from "@/components/whitelist";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "WhiteList",
  description: "Secret whitelist Page.",
  canonical: "/whitelist",
});

export default function Whitelist() {
  return <WhitelistPage />;
}
