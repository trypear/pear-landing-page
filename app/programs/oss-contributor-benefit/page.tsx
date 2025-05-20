"use client";

import { FAQItem } from "@/types/faqItems";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import CTA from "@/components/cta";

const faqData: FAQItem[] = [
  {
    id: "first",
    question: "What You'll Receive",
    answer: (
      <ul className="list-disc space-y-1 pl-6 text-left">
        <li>Free base PearAI subscription for an entire month</li>
        <li>Official contributor status to add to your LinkedIn and resume</li>
        <li>
          Distinguished Discord role with regular shoutouts in the PearAI
          community
        </li>
      </ul>
    ),
  },
  {
    id: "second",
    question: "How to Contribute:",
    answer: (
      <div className="flex flex-col gap-2 text-left">
        <div>
          <p className="mb-1 font-medium">Ticket-based improvements:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Solving needed tickets listed in our Sprint board{" "}
              <a
                className="text-primary-700 underline"
                href="https://github.com/orgs/trypear/projects"
                target="_blank"
                rel="noopener"
              >
                here
              </a>
              .
            </li>
            <li>
              If you want to see an improvement not listed, you can file an
              issue.
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-1 font-medium">Bug fixes:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Identifying and fixing bugs you encounter</li>
            <li>Submitting pull requests to fix the bug</li>
          </ul>
        </div>

        <div>
          <p className="mb-1 font-medium">Bounty-based tickets:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Larger tickets that if you solve, you will get awarded the listed
              bounty amount. View bounty-based tickets{" "}
              <a
                className="text-primary-700 underline"
                href="https://github.com/orgs/trypear/projects/14"
                target="_blank"
                rel="noopener"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "third",
    question: "Why Contribute?",
    answer: (
      <ul className="list-disc space-y-1 pl-6 text-left">
        <li>
          <span className="font-medium">Career advancement:</span> Companies
          love hiring open source contributors. Build your portfolio with
          real-world open source experience.
        </li>
        <li>
          <span className="font-medium">Free benefits &amp; Bounties:</span>{" "}
          Enjoy a free PearAI base subscription. Potentially earn monetary
          bounties.
        </li>
        <li>
          <span className="font-medium">Community impact:</span> Help make
          software creation accessible to everyone. Join an active, supportive
          developer community. Receive recognition in weekly community
          shoutouts.
        </li>
      </ul>
    ),
  },
  {
    id: "fourth",
    question: "How to Get Started",
    answer: (
      <ol className="list-decimal space-y-1 pl-6 text-left">
        <li>
          Visit our GitHub repository{" "}
          <a
            className="text-primary-700 underline"
            href="https://github.com/trypear/pearai-master"
            target="_blank"
            rel="noopener"
          >
            here
          </a>
        </li>
        <li>
          Join our Discord server and message in{" "}
          <span className="font-medium">#general</span> which ticket you want to
          take up.
        </li>
        <li>Submit your pull request for review!</li>
      </ol>
    ),
  },
];

const OSSContribution: React.FC = () => {
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
              Join the PearAI OSS Contributor Program!
            </h2>
            <p className="text-xl text-[#666666]">
              PearAI is proudly open source, driven by an amazing community
              working together to help anyone build software. Whether
              you&apos;re a student looking to enhance your resume, a coding
              enthusiast, or a PearAI user hoping to improve the product, we
              welcome and value your contributions!
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

          <div className="mx-auto">
            <h3 className="mb-4 flex justify-center text-4xl text-black">
              We Can&apos;t Do This Without You 🍐
            </h3>
            <p className="mx-auto w-full max-w-2xl text-center text-[#666666]">
              Your contributions directly help build better tools for everyone
              who wants to create software. Join us in making software
              development accessible to all!
            </p>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default OSSContribution;
