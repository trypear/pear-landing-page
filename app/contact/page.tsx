import ContactUs from "@/components/contact";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
    title: "Contact Us",
    description: "Contact PearAI.",
    canonical: "/contact",
});

export default function Pricing() {
    return (
        <>
            <ContactUs />
        </>
    );
}
