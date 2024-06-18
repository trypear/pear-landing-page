import AboutComponent from "@/components/about";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "About",
  description: "About the team behind pear.ai",
  canonical: "/about",
});

export default function About() {
  return (
    <>
      <AboutComponent />
    </>
  );
}
