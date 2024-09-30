"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FAQItem } from "@/types/faqItems";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const FAQComponent: React.FC = () => {
  const router = useRouter();
  const [openItem, setOpenItem] = useState<string>("");
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setOpenItem(hash);
        scrollToItem(hash);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollToItem = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element && accordionRef.current) {
      const navbarHeight = 100; // Adjust this value to match your navbar height
      const yOffset = -navbarHeight - 200; // Additional offset for better positioning
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
          value={openItem}
          onValueChange={(value) => setOpenItem(value)}
          className="w-full max-w-3xl space-y-4 px-8"
        >
          {faqData.map((item) => {
            return (
              <AccordionItem key={item.id} value={item.id} id={item.id}>
                <AccordionTrigger
                  className="text-left text-base font-medium"
                  onClick={(e) => {
                    setOpenItem(openItem === item.id ? "" : item.id);
                    router.push(`#${item.id}`, undefined);
                  }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line text-sm text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
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

export default FAQComponent;

const faqData: FAQItem[] = [
  {
    id: "why-called-pearai",
    question: "Why is it called PearAI?",
    answer: <p>Pair programming... Pear Programming... PearAI!</p>,
  },
  {
    id: "difference-with-competitors",
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
    id: "why-switch",
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
    id: "why-not-use-chatgpt",
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
    id: "why-not-extension",
    question: "Why is PearAI not an extension instead of an app?",
    answer: (
      <p>
        PearAI is a full-fledged app. Being an app instead of being just an
        extension provides us the highest degree of freedom to ensure the best,
        smoothest experience for you. There are features that we cannot make if
        it was only an extension. For example being an extension prohibits any
        sort of UI component overlay on top of code files. We believe the future
        of AI coding requires the ability to modify the entire app.
        <br />
        <br />
        If you prefer to use a VSCode extension, we recommend using{" "}
        <Link href="https://continue.dev/">Continue.dev</Link> instead. We are a
        fork of them so the features will be very similar!
      </p>
    ),
  },
  {
    id: "storing-code",
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
  {
    id: "compared-with-continue",
    question: "What new features does PearAI offer compared to Continue.dev?",
    answer: (
      <div>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Automatic file creation and generation from the chat panel directly.
            E.g. if you ask it to generate code and it’s supposed to create a
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
          doesn’t come with everything out the box (e.g. missing extensions,
          errors with packaging for distribution and certificates, auto updates,
          etc.).
          <br /> <br />
          We also had to do a ton of upfront work for peripheral stuff like
          setting up the open source community on Github, Discord,
          documentation, the server to enable free trials working out the box,
          and the entire landing page that you see here.
          <br /> <br />
          Now that we have our foundations much more stable, we&apos;ll be
          focusing on having more new features. Coming up next is simultaneous
          file and code generation! This is only the beginning for PearAI, and
          long term we hope to make the best AI code editor, and have it open
          source for all.
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
