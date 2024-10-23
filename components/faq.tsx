"use client";

import { FAQItem } from "@/types/faqItems";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const FAQComponent: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay the scroll to ensure the page is fully loaded
        setTimeout(() => {
          const navbarHeight = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          const item = faqData.find((item) => item.id === id);
          if (item) {
            setOpenItem(id);
          }
        }, 100);
      }
    }
  }, []);

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
            Can&apos;t find the answer you&apos;re looking for? Ask us directly
            in our{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://discord.gg/AKy5FmqCkF"
            >
              Discord
            </Link>{" "}
            or through{" "}
            <a href="mailto:pear@trypear.ai" className="underline">
              email
            </a>
            .
          </p>
          <div className="mb-4 mt-6 max-w-3xl text-center" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold text-primary-700">
              Why PearAI?
            </h3>
            <p className="text-base text-gray-600">
              You just want to be able to make what you want, fast. PearAI gets
              you that. <br />
              The AI tooling space is moving too quick for most to keep up with.
              One day product X is best for code generation, the next day it’s
              product Y. PearAI aims to natively integrate the best-in-market AI
              tools for each aspect of coding with AI (tooling for code
              generation, LLM, search, codebase knowledge, debugging, etc.), so
              you don’t have to worry about anything, and can just focus on
              building as efficiently as possible.
            </p>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl space-y-4 px-8"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id} id={item.id}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-sm text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem key="contribute" value="contribute" id="contribute">
            <AccordionTrigger className="text-left text-base">
              7. How can I contribute to PearAI?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600">
              See the contributor&apos;s section:{" "}
              <Link
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

export default FAQComponent;

const faqData: FAQItem[] = [
  {
    id: "name",
    question: "0. Why is it called PearAI?",
    answer: <p>Pair programming... Pear Programming... PearAI!</p>,
  },
  {
    id: "extension",
    question: "1. Is PearAI an extension or an app? (Native Integrations)",
    answer: (
      <p>
        PearAI is a full-fledged app. Being an app instead of being just an
        extension provides us the highest degree of freedom to ensure the best,
        smoothest experience for you. This is what we mean by native
        integrations, as the best AI tools we are trying to incorporate,
        requires us to have full control of the original VSCode codebase, and
        not just the extensions&apos; folders.
        <br />
        <br />
        If you prefer to use a VSCode extension, we recommend using{" "}
        <Link href="https://continue.dev/">Continue.dev</Link> instead. We are
        partially a fork of them so a lot of the core features will be similar
        (for now!).
      </p>
    ),
  },
  {
    id: "privacy",
    question: "2. Does PearAI store my code?",
    answer: (
      <p>
        No. All codebase indexing occurs and remains strictly local on your
        machine (
        <Link
          target="_blank"
          className="underline underline-offset-4"
          href="https://github.com/trypear/pearai-submodule/tree/main/core/indexing"
        >
          source
        </Link>
        ). Our servers never store any of your code. Additionally, we maintain a
        zero-data retention policy with our LLM cloud provider, Anthropic,
        ensuring they also neither store nor train on your code.
      </p>
    ),
  },
  {
    id: "copilot",
    question: "3. Why PearAI over competitors like Github Copilot?",
    answer: (
      <p>
        <b>No AI model vendor lock in, higher quality code generation</b>:
        Unlike Copilot, which is limited to OpenAI&apos;s models, PearAI will
        leverage the most advanced AI models available on the market regardless
        of affiliation, ensuring you have the highest quality code generation
        tool at any given moment (currently Claude 3.5 Sonnet). Users have
        expressed up to <b>20-30% improvements on generated code</b>
        ! You can also use your own API keys, or local models. <br />
        <br />
        <b>Extensibility</b>: As a complete IDE rather than just an extension,
        PearAI provides a more integrated and refined coding environment. This
        allows for smoother workflows and more intuitive interactions with AI
        assistance, which we are building out with our PearAI Inventory.
        <br />
        <br />
        <b>Open source</b>: PearAI is fully transparent and open-source, which
        means anyone can see, review, and contribute to all of our code! This
        allows for a community-driven product, mitigates privacy concerns that
        other similar tools face, and provide a faster development cycle thanks
        to community members who help solve issues, and build new features. Read
        more:{" "}
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
    id: "cursor",
    question: "4. Why PearAI over competitors like Cursor?",
    answer: (
      <p>
        Competitors like Cursor are solving a huge problem in a
        one-size-fits-all manner. Building for the future, PearAI will have
        PearAI Inventory, which integrates the best tools for each part of the
        AI tech stack (chat assistant, code generation, search, collaboration,
        personalization, etc.) into a unified, seamless user experience for
        specifically what you are trying to make. There are products
        specifically dedicating all their efforts to each layer of the AI stack,
        and we will do the research on finding out who the best are, and spend
        the effort to integrate them for your workflow.
        <br /> <br />
        We are extendable for integration with all the latest, up-to-date AI
        tools (ie. mem0, aider, etc.), so you always know you are getting the
        best experience possible on the market. We are also open source, so
        there are no privacy issues with your code or data.
      </p>
    ),
  },
  {
    id: "chatgpt",
    question:
      "5. Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
    answer: (
      <p>
        PearAI provides better responses than vanilla LLM&apos;s by having
        context of your codebase achieved through RAG (Retrieval Augemented
        Generation), and a bunch of other integrated features that will make
        your AI coding experience much more seamless.
      </p>
    ),
  },
  {
    id: "continue",
    question: "6. What new features does PearAI offer compared to Continue?",
    answer: (
      <div>
        <p className="mb-4">
          PearAI-submodule started out as a fork of Continue.dev. Here&apos;s
          what we&apos;ve built on top of it so far:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Automatic file creation and generation from the chat panel directly.
            E.g. if you ask it to generate code and it&apos;s supposed to create
            a file too, it will allow you to do so. Neither Continue nor Cursor
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
          doesn&apos;t come with everything out the box (e.g. missing
          extensions, errors with packaging for distribution and certificates,
          auto updates, etc.).
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
            className="underline underline-offset-4"
          >
            here
          </Link>
          , and you can also view most of the app commits{" "}
          <Link
            href="https://github.com/trypear/pearai-submodule/commits/main"
            target="_blank"
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
