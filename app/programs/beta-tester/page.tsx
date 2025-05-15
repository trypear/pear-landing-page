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
import CTA from "@/components/cta";
import { BetaTesterSignupForm } from "@/components/ui/beta-tester-signup-form";

const faqData: FAQItem[] = [
  {
    id: "first",
    question: "What's In It For You?",
    answer: (
      <ul className="list-disc space-y-1 pl-4 text-left">
        <li>Free base PearAI subscription for the entire month</li>
        <li>Exclusive early access to experimental features and updates</li>
        <li>
          Direct influence on product development—your feedback shapes what we
          build!
        </li>
        <li>
          Be part of the inner circle that&apos;s helping create the next
          generation of AI tools. You&apos;ll get a special Discord role as well
          on the PearAI server.
        </li>
      </ul>
    ),
  },
  {
    id: "second",
    question: "How It Works",
    answer: (
      <p>
        Simply fill out the form below if you’re interested in joining! If
        selected, you can try out our beta releases, play around with new
        features, and let us know what you think via a quick feedback form. If
        you spot any bugs or have suggestions, we want to hear them!
      </p>
    ),
  },
  {
    id: "third",
    question: "We Can't Do This Without You!",
    answer: (
      <p>
        We&apos;re incredibly grateful for beta testers who take the time to
        help us improve. Your participation doesn&apos;t just help us; it helps
        build better tools for everyone who wants to create software. Fill out
        the form below to join!
      </p>
    ),
  },
];

const BetaTester: React.FC = () => {
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
          <div className="mb-16 flex flex-col gap-5">
            <h2 className="text-[44px] font-semibold text-black">
              Join the PearAI Beta Tester Program!
            </h2>
            <p className="text-xl text-[#666666]">
              At PearAI, our mission is to allow anyone to turn their ideas into
              creation. We&apos;re constantly adding new features and updates to
              get closer to our goal. To make sure public releases are bug-free,
              we regularly release early versions of PearAI with experimental
              features to those in the PearAI Beta Tester Program!
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mb-16 w-full rounded-xl border-[1.5px] border-[#e6e6e6] bg-[#F4F4F4]"
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
          <div className="w-full">
            <BetaTesterSignupForm />
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default BetaTester;
