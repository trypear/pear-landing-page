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
            <AccordionTrigger className="text-left text-base font-semibold">
              How can I contribute to PearAI?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600">
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
      <Footer />
    </>
  );
};

export default FAQ;
