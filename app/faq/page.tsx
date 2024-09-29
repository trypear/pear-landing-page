import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { FAQItem } from "@/types/faqItems";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequently Asked Questions",
  canonical: "/faq",
});

const FAQ: React.FC = () => {
  return (
    <>
      <section className="mx-auto mt-36 flex w-full flex-col items-center px-4">
        <div className="mb-16 text-center">
          <h2
            className="mb-4 whitespace-pre-line text-3xl font-bold text-primary-700"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="whitespace-pre-line text-base text-gray-600"
            data-aos="fade-up"
          >
            Can&apos;t find the answer you&apos;re looking for? Ask us on our{" "}
            <Link
              className="underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.gg/AKy5FmqCkF"
            >
              Discord
            </Link>
            .
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl space-y-4 px-8"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={String(index + 1)}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-sm text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value={"contribute"}>
            <AccordionTrigger className="text-left text-base font-semibold">
              How can I contribute to PearAI?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600">
              See the contributor&apos;s section:{" "}
              <Link
                rel="noopener noreferrer"
                className="underline"
                target="_blank"
                href="/docs/contributors"
              >
                Contributing 101
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default FAQ;

const faqData: FAQItem[] = [
  {
    question: "Why is it called PearAI?",
    answer: <p>Pair programming... Pear Programming... PearAI!</p>,
  },
  {
    question:
      "What separates PearAI from Github Copilot and other competitors?",
    answer: (
      <p>
        PearAI offers significant advantages over competitors in both AI
        capabilities and user experience: <br />
        <br />
        AI Model Flexibility: Unlike Copilot, which is limited to OpenAI&apos;s
        models, PearAI leverages the most advanced AI models available,
        currently featuring Claude Sonnet 3.5. This flexibility allows us to
        always use the best-performing model for coding tasks. You can also use
        your own API keys, or local models. <br />
        <br />
        Enhanced Codebase Context: Using RAG (Retrieval Augmented Generation),
        PearAI has knowledge of your entire codebase, making answers much more
        relevant and useful for you. In contrast, Copilot can only include
        limited context that you must pick out yourself. <br />
        <br />
        UI/UX Focus: As a complete IDE rather than just an extension, PearAI
        provides a more integrated and refined coding environment. This allows
        for smoother workflows and more intuitive interactions with AI
        assistance.
        <br />
        <br />
        Open-Source: PearAI is fully transparent and open-source, which means
        anyone can see, review, and contribute to all of our code! This allows
        for a community-driven product, mitigates privacy concerns that other
        similar tools face, and provide a faster development cycle thanks to
        community members who help solve issues, and build new features. See why
        this is a huge differentiator for PearAI compared to alternatives such
        as Cursor on our blog post:{" "}
        <Link
          href="/blog/why-open-source"
          className="text-primary-600 hover:underline"
        >
          Why Open Source Matters for AI Code Editors
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Why should I switch to PearAI?",
    answer: (
      <p>
        PearAI will speed up and improve your development. PearAI is a fork of
        VSCode, and possess all of its functionalities, but also adds more to it
        by integrating AI functionalities to speed up your coding workflow.
        Current users have expressed that their coding workflow accelerated by
        at least 3-4x.
        <br />
        <br /> By switching to PearAI, you can speed up your product
        development, and not lack behind in terms of AI tooling compared to your
        peers.
      </p>
    ),
  },
  {
    question:
      "Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
    answer: (
      <p>
        With PearAI, you don&apos;t need copy-paste code or switch tabs anymore,
        as AI is integreated into the code editor for a seamless experience.
        Also, PearAI provides better responses than vanilla LLM&apos;s by having
        context of your codebase achieved through RAG (Retrieval Augemented
        Generation). Try it out yourself - we&apos;re sure you&apos;ll love it!
      </p>
    ),
  },
  {
    question: "Is PearAI an extension or an app?",
    answer: (
      <p>
        PearAI is a full-fledged app. Being an app instead of being just an
        extension provides us the highest degree of freedom to ensure the best,
        smoothest experience for you!
        <br />
        <br />
        If you prefer to use a VSCode extension, we recommend using{" "}
        <Link href="https://continue.dev/">Continue.dev</Link> instead. We are a
        fork of them so the features will be very similar!
      </p>
    ),
  },
  {
    question: "Does PearAI store my code?",
    answer: (
      <p>
        No. All codebase indexing occurs and remains strictly local on your
        machine (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
          href="https://github.com/trypear/pearai-submodule/tree/main/core/indexing"
        >
          source
        </Link>
        ). Our servers never store any of your code. Additionally, we maintain a
        zero-data retention policy with our LLM cloud provider, Anthropic,
        ensuring also they neither store nor train on your code.
      </p>
    ),
  },
];
