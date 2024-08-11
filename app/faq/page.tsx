"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/constants";
import Link from "next/link";

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col gap-4 px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-4">
        <h4
          className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h4>
        <div
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
        </div>
      </div>
      <Accordion type="single" collapsible>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`{${index + 1}}`}>
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
