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
              See the contributor&apos;s section:{" "}
              <Link
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
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

export default FAQ;

const faqData: FAQItem[] = [
  {
    question: "Why is it called PearAI?",
    answer: (
      <p>
        The name PearAI is a playful combination of &ldquo;pair
        programming&rdquo; and &ldquo;AI&rdquo;, reflecting our focus on
        collaborative coding and the power of artificial intelligence.
      </p>
    ),
  },
  {
    question: "What separates PearAI from our competitors?",
    answer: (
      <p>
        PearAI provides significant advantages in both AI capabilities and
        overall user experience:
        <br />
        <br />
        <b>Unmatched AI Model Flexibility:</b> PearAI leverages the most
        advanced AI models available, currently featuring Claude Sonnet 3.5,
        ensuring optimal performance for your coding tasks. Integrate your own
        API keys or local models for a truly customized experience.
        <br />
        <br />
        <b>Superior Codebase Understanding:</b> Using Retrieval Augmented
        Generation (RAG), PearAI understands your entire codebase, providing
        highly relevant and useful assistance. This deep contextual awareness
        significantly enhances the quality of AI-driven suggestions.
        <br />
        <br />
        <b>Intuitive and Integrated Development Environment:</b> As a complete
        IDE, PearAI offers a seamless and refined coding experience,
        streamlining workflows and facilitating intuitive interactions with AI
        assistance.
        <br />
        <br />
        <b>Transparency and Community-Driven Innovation:</b> PearAI is fully
        open-source, promoting transparency and community involvement. This
        fosters continuous improvement, rapid development, and addresses privacy
        concerns often associated with proprietary alternatives. Learn more
        about the power of open-source in our blog post:{" "}
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
    question: "How does PearAI compare to GitHub Copilot?",
    answer: (
      <p>
        As a comprehensive code editor, PearAI offers a more integrated AI
        coding experience compared to Copilot, which functions as an extension.
        PearAI&apos;s user interface is designed specifically for seamless AI
        interaction, and we prioritize utilizing the latest and most powerful AI
        models available. Our advanced Retrieval Augmented Generation (RAG)
        implementation ensures superior codebase context, resulting in more
        accurate and relevant code suggestions than Copilot.
      </p>
    ),
  },
  {
    question: "How does PearAI compare to Cursor?",
    answer: (
      <p>
        PearAI distinguishes itself through its open-source nature, guaranteeing
        complete transparency and data privacy. Our community-driven development
        fosters trust and collaboration, allowing developers to actively
        contribute to the platform&apos;s evolution. Additionally, PearAI offers
        a more cost-effective solution compared to Cursor.
      </p>
    ),
  },
  {
    question: "How does PearAI compare to ChatGPT?",
    answer: (
      <p>
        While ChatGPT is a versatile language model, PearAI specializes in code
        generation with its advanced AI models (e.g., Claude 3.5 Sonnet) and
        deep understanding of your codebase through local Retrieval Augmented
        Generation (RAG) implementation. This allows PearAI to provide superior
        code suggestions within your coding environment, eliminating the need
        for constant tab-switching and code-copying.
      </p>
    ),
  },
  {
    question: "Why should I switch to PearAI?",
    answer: (
      <p>
        PearAI significantly enhances developer productivity by building upon
        the robust foundation of VS Code. We&apos;ve taken all the functionality
        you love about VS Code and supercharged it with integrated AI
        capabilities designed to streamline your workflow.
        <br />
        <br />
        Our users report experiencing a 3-4x increase in development speed. This
        translates to faster product development cycles, empowering you to stay
        ahead of the curve and maintain a competitive edge with cutting-edge AI
        tooling. Transitioning to PearAI ensures you&apos;re equipped with the
        tools to innovate and deliver faster than ever before.
      </p>
    ),
  },
  {
    question:
      "Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
    answer: (
      <p>
        PearAI eliminates the need for constant copy-pasting and tab switching.
        Our seamless AI integration directly within the code editor provides a
        streamlined and efficient coding experience. Leveraging Retrieval
        Augmented Generation (RAG), PearAI delivers superior responses compared
        to standard LLMs by incorporating the context of your codebase.
        Experience the difference – we&apos;re confident you&apos;ll be
        impressed.
      </p>
    ),
  },
  {
    question: "Why a dedicated code editor instead of an extension?",
    answer: (
      <p>
        Developing PearAI as a standalone code editor enables us to optimize the
        user interface and experience for seamless AI integration. This approach
        ensures maximum productivity and efficiency for developers.
      </p>
    ),
  },
  {
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
    question: "Want to see a demo?",
    answer: (
      <p>
        Checkout{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline"
          href="https://youtu.be/v4NN_qadBS0?si=Gk6TKD-R1U_RAaln "
        >
          Building a new feature without having to write a single line of code
          with PearAI
        </Link>
      </p>
    ),
  },
];
