"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why is PearAI called PearAI?",
    answer: "Pear programming... Pair programming... PearAI Pair programming!",
  },
  {
    question: "What separates PearAI from Github Copilot?",
    answer:
      "PearAI will provide better quality responses, and also has a better UX. These are the 2 key factors in accelerating your coding workflow. For both of these factors, you can try the free trial, and you'll be able to see the proof for yourself.",
  },
  {
    question: "Why should I switch to PearAI?",
    answer:
      "PearAI is a fork of VSCode, and possess all of its functionalities, but also adds more to it by integrating AI functionalities to speed up your coding workflow. Current users have expressed that their coding workflow accelerated by at least 3-4x.",
  },
  {
    question: "Why can't I just use ChatGPT/Claude/etc. directly instead?",
    answer:
      "You can, and we used to as well. However, the convenience of the chat being integrated into the editor, along with easy access features within the chats such as including other files, applying changes directly, removing the need to copy paste code, prompting with code context, adding other websites or docs links in chat directly, all of this and more, means that you have a much more seamless coding experience, resulting in significant overall faster development. Try it yourself!",
  },
  {
    question: "Is PearAI an extension or an app?",
    answer:
      "PearAI is an app and requires you to download it. Being a VSCode extension severely limits the modifications we can do. In order to provide the best UX possible, we need full control of code changes within the app.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col gap-4 px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-4">
        <h2
          className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>
        <p
          className="whitespace-pre-line text-base text-gray-600 lg:text-base"
          data-aos="fade-up"
        >
          Can&apos;t find the answer you&apos;re looking for? Join our{" "}
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
      <Accordion type="single" collapsible>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={String(index + 1)}>
            <AccordionTrigger className="text-left font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
        <AccordionItem value={"contribute"}>
          <AccordionTrigger className="text-left font-semibold">
            How can I contribute to PearAI
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-600">
            See the contributor&apos;s section.{" "}
            <Link
              rel="noopener noreferrer"
              className="underline"
              target="_blank"
              href="https://docs.google.com/presentation/d/1zR9-7DTlb2PcsnapryZw8jHSkLTs9JxeXth4nyeemAQ/edit?usp=sharing"
            >
              Contributing 101
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
