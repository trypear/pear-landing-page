import { Metadata } from "next/types";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Disclaimer",
  description: "Disclaimer for PearAI.",
  canonical: "/disclaimer",
});

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-4xl px-4 pb-16 pt-32">
        <h1 className="mb-16 text-5xl font-extrabold tracking-tight text-foreground/90">
          Legal Disclaimers
        </h1>
        <section className="space-y-8">
          <div className="transform rounded-xl bg-secondary-300/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground">
              Logos and Trademarks
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground/90">
              The logos, trademarks, and brand names displayed on this website
              are the property of their respective owners. Their use does not
              imply any affiliation with or endorsement by these companies.
              PearAI is not sponsored by, officially affiliated with, or
              endorsed by any of the companies whose logos or products are
              featured.
            </p>
          </div>

          <div className="transform rounded-xl bg-secondary-300/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground">
              Continue
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground/90">
              PearAI Chat is built upon the foundation of Continue, an
              open-source project. While we have made significant modifications
              to the codebase, we acknowledge and respect Continue&apos;s
              contributions. We do not claim any affiliation with or endorsement
              by Continue or its team. We are committed to maintaining the
              integrity of both projects and ensuring that our representation of
              PearAI Chat does not misrepresent Continue&apos;s brand or
              product.
            </p>
          </div>

          <div className="transform rounded-xl bg-secondary-300/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground">
              Aider
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground/90">
              PearAI Creator is powered by aider, an AI pair programming tool.
              We have integrated aider&apos;s functionality into our UI/UX with
              permission from the aider team. We do not claim any endorsement by
              aider or its creators. PearAI operates independently, and we are
              committed to maintaining the integrity of both projects. We strive
              to ensure that our implementation and representation of PearAI
              Creator does not misrepresent aider&apos;s brand or product.
            </p>
          </div>

          <div className="transform rounded-xl bg-secondary-300/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground">
              Other Brands
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground/90">
              PearAI does not claim any endorsement by its integrations. PearAI
              operates independently, and we are committed to maintaining the
              integrity of all integrations. We strive to ensure that our
              implementation and representation of PearAI does not misrepresent
              or negatively impact any other brand or product.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
