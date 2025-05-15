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
import CTA from "./cta";

const faqData: FAQItem[] = [
  {
    id: "name",
    question: "Why is it called PearAI?!",
    answer: <p>Pair programming... Pear Programming... PearAI! 🍐💡</p>,
  },
  {
    id: "privacy",
    question: "Does PearAI store my code?!",
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
        zero-data retention policy with our primary LLM cloud provider,
        Anthropic, ensuring they also neither store nor train on your code.
      </p>
    ),
  },
  {
    id: "contribute",
    question: "How can I contribute to PearAI?!",
    answer: (
      <p>
        See the contributor&apos;s section:{" "}
        <Link className="underline" target="_blank" href="/docs/contributors">
          Contributing 101
        </Link>
        .
      </p>
    ),
  },
];

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
      <div className="w-full px-6">
        <section className="mx-auto mb-[68px] mt-[122px] flex max-w-[1049px] flex-col">
          <div className="mb-16 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-[44px] font-semibold text-black">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#666666]">
                Can&apos;t find the answer you&apos;re looking for? Ask us
                directly in our{" "}
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
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Why PearAI?</h3>
              <p className="text-xl text-[#666666]">
                You just want to be able to make what you want, fast. PearAI
                gets you that.
              </p>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border-[1.5px] border-[#e6e6e6] bg-[#F4F4F4]"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                id={item.id}
                className={`border-b-[#e6e6e6] p-7 ${index === faqData.length - 1 ? "border-none" : "border-b-[1.5px]"}`}
              >
                <AccordionTrigger className="p-0 text-left text-2xl font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line p-0 pt-3 text-xl text-[#666666]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default FAQComponent;
