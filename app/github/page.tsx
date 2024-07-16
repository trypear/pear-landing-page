import GithubPageComponent from "@/components/github-page";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
    title: "GitHub",
    description: "GitHub repositories PearAI",
    canonical: "/github",
});

export default function github() {
    return (
        <>
            <GithubPageComponent />
        </>
    );
}