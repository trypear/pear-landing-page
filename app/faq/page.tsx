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
import React from "react";
import Footer from "@/components/footer";

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
            <AccordionTrigger className="text-left text-base">
              8. How can I contribute to PearAI?
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
      <Footer />
    </>
  );
};

export default FAQ;

const faqData: FAQItem[] = [
  {
    question: "0. Why is it called PearAI?",
    answer: <p>Pair programming... Pear Programming... PearAI!</p>,
  },
  {
    question: "1. Why PearAI over competitors like Cursor?",
    answer: (
      <p>
        Competitors like Cursor are solving a huge problem in a
        one-size-fits-all manner. Building for the future, PearAI has PearAI
        Inventory, which integrates the best tools for each part of the AI tech
        stack (chat assistant, code generation, search, collaboration,
        personalization, etc.) into a unified, seamless user experience for
        specifically what you are trying to make. We are extendible to
        integration with all the latest, up-to-date tools (ie. mem0, Aider,
        etc.), so you always know you are getting the best experience possible
        on the market. We are also open-source and fully-transparent, so there
        are never any privacy issues with your code or data.
      </p>
    ),
  },
  {
    question: "2. What separates PearAI from competitors like Github Copilot?",
    answer: (
      <p>
        PearAI offers significant advantages over competitors like Github
        Copilot in both AI capabilities and user experience: <br />
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
    question: "3. Why should I switch to PearAI?",
    answer: (
      <p>
        PearAI will speed up and improve your development. PearAI is a fork of
        VSCode, and possess all of its functionalities, but reimagined for building natively with the best-on-market AI tools.
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
      "4. Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
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
    question: "5. Is PearAI an extension or an app?",
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
    question: "6. Does PearAI store my code?",
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
  {
    question:
      "7. What new features does PearAI offer compared to Continue.dev?",
    answer: (
      <div>
        <p className="mb-4">
          PearAI-submodule started out as a fork of Continue.dev. Here's what
          we've built on top of it so far:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Automatic file creation and generation from the chat panel directly.
            E.g. if you ask it to generate code and it's supposed to create a
            file too, it will allow you to do so. Neither Continue nor Cursor
            have this feature within the chat panel.
          </li>
          <li>
            <code>@Directory Structure</code> command to include context of your
            entire codebase file tree.
          </li>
          <li>
            Built-in <code>/leetcode</code> command: AI leetcode tutor for
            interview question practice.
          </li>
          <li>
            Built-in <code>/sensei</code> command: PearAI acts as an experienced
            engineer for guided learning.
          </li>
          <li>
            Built-in <code>/component</code> command: Constructs React
            components using v0.
          </li>
          <li>
            Integrated standalone application instead of an extension, enabling
            better onboarding UX and more meaningful changes
          </li>
          <li>
            Ability to switch between most recent chat and current with a
            shortcut.
          </li>
          <li>Ability to dynamically resize chat panel with a shortcut.</li>
          <li>Shortcuts bar on top of chat for easier access and better UX.</li>
          <li>
            Shortcut to bring terminal errors directly to chat for debugging.
            Continue&apos;s version of this was not working.
          </li>
          <li>
            Improved onboarding page with immediate access to PearAI free trial
            (GPT4 or Claude 3.5 Sonnet).
          </li>
        </ul>
        <p className="mt-2">
          These are some of the new features we have for v1. We also had to do a
          ton of maintenance and integration work, to make a forked extension
          part of VSCode work smoothly, and making open source VSCode usable; it
          doesn't come with everything out the box (e.g. missing extensions,
          errors with packaging for distribution and certificates, auto updates,
          etc.).
          <br /> <br />
          We also had to do a ton of upfront work for peripheral stuff like
          setting up the open source community on Github, Discord,
          documentation, the server to enable free trials working out the box,
          and the entire landing page that you see here.
          <br /> <br />
          We are currently building v2, which includes PearAI Inventory, that
          integrates the best tools for each part of the AI tech stack (chat
          assistant, code generation, search, collaboration, personalization,
          etc.) into a unified, seamless user experience for specifically what
          you are trying to make. Continue is integrated as one part of the AI
          tech stack available on PearAI.
          <br /> <br />
          You can view all of our past completed sprint boards{" "}
          <Link
            href="https://github.com/orgs/trypear/projects?query=is%3Aclosed"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            here
          </Link>
          , and you can also view most of the app commits{" "}
          <Link
            href="https://github.com/trypear/pearai-submodule/commits/main"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            here
          </Link>
          .
        </p>
      </div>
    ),
  },
];
