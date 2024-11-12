import { Metadata } from "next/types";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Disclaimer",
  description: "Disclaimer for PearAI.",
  canonical: "/disclaimer",
});

export default function Disclaimer() {
  const sections = [
    {
      title: "Integrations",
      content:
        "PearAI incorporates various third-party integrations that may have been substantially modified to facilitate native integration and communication with other integrations. These modifications are specific to PearAI's implementation and may differ from the original integration's functionality. For the official and unmodified version of any integration, users should refer to the respective integration's website and follow their official documentation and instructions. PearAI assigns unique names to each functionality (e.g. Creator, Search, etc.) to maintain flexibility in updating or replacing underlying integrations as needed to provide the best experience for users.",
    },
    {
      title: "Logos and Trademarks",
      content:
        "The logos, trademarks, and brand names displayed on this website are the property of their respective owners. Their use does not imply any affiliation with or endorsement by these companies. PearAI is not sponsored by, officially affiliated with, or endorsed by any of the companies whose logos or products are featured.",
    },
    {
      title: "Continue",
      content: (
        <>
          PearAI Chat is currently built upon the foundation of{" "}
          <a
            href="https://www.continue.dev/"
            className="text-gray-700 underline"
          >
            Continue
          </a>
          , an open source project. While we have made significant modifications
          to the codebase, we acknowledge and respect Continue&apos;s
          contributions. We do not claim any affiliation with or endorsement by
          Continue or its team. We are committed to maintaining the integrity of
          both projects and ensuring that our representation of PearAI Chat does
          not misrepresent Continue&apos;s brand or product.
        </>
      ),
    },
    {
      title: "aider",
      content: (
        <>
          PearAI Creator is currently powered by aider, an AI pair programming
          tool. We have integrated aider&apos;s functionality into our UI/UX
          with We have integrated{" "}
          <a href="https://aider.chat/" className="text-gray-700 underline">
            aider&apos;s
          </a>{" "}
          functionality into our UI/UX with permission from the aider team. We
          do not claim any endorsement by aider or its creators. PearAI operates
          independently, and we are committed to maintaining the integrity of
          both projects. We strive to ensure that our implementation and
          representation of PearAI Creator does not misrepresent aider&apos;s
          brand or product.
        </>
      ),
    },
    {
      title: "Other Brands",
      content:
        "PearAI does not claim any endorsement by its integrations. We are committed to maintaining the integrity of all integrations. We strive to ensure that our implementation and representation of PearAI does not misrepresent any other brand or product.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 pb-16 pt-32">
        <h1 className="mb-16 text-4xl font-bold">Disclaimers</h1>
        <section className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="rounded-xl bg-secondary-300/10 p-6">
              <h2 className="mb-6 text-xl font-bold text-card-foreground">
                {section.title}
              </h2>
              <p className="text-base text-black/60 dark:text-gray-500">
                {section.content}
              </p>
            </div>
          ))}
          <p className="mx-2 text-center text-sm text-gray-500">
            If you have any questions, or would like to contact us regarding how
            your logo or branding is used, please email us at{" "}
            <a
              href="mailto:pear@trypear.ai"
              className="text-primary-700 underline hover:text-primary-700/90"
            >
              pear@trypear.ai
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
