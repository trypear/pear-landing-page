import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/constants";
import Link from "next/link";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequently Asked Questions",
  canonical: "/faq",
});

const FAQ: React.FC = () => {
  return (
    <>
      <section className="mx-auto mt-10 flex w-full flex-col items-center px-4 py-8 sm:px-8 md:px-16 lg:px-24 lg:py-20 xl:px-32">
        <div className="mb-8 text-center">
          <h2
            className="mb-4 whitespace-pre-line text-3xl font-bold text-primary-700 lg:text-5xl"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="whitespace-pre-line text-lg text-gray-600 lg:text-xl"
            data-aos="fade-up"
          >
            Can&apos;t find the answer you&apos;re looking for? Ask us directly
            in our{" "}
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
          className="w-full max-w-3xl space-y-4 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={String(index + 1)}>
              <AccordionTrigger className="text-left text-xl font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-lg text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value={"contribute"}>
            <AccordionTrigger className="text-left text-xl font-semibold">
              How can I contribute to PearAI?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600">
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
      </section>
    </>
  );
};

export default FAQ;
