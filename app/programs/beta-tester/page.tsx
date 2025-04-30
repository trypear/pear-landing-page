import { Metadata } from "next";
import { BetaTesterSignupForm } from "@/components/ui/beta-tester-signup-form";

export const metadata: Metadata = {
  title: "PearAI Beta Tester Program",
  description:
    "Join the PearAI Beta Tester Program for exclusive early access, rewards, and to shape the future of AI software creation.",
  alternates: { canonical: "/programs/beta-tester" },
};

export default function BetaTesterPage() {
  return (
    <section className="mx-auto mt-36 flex w-full max-w-3xl flex-col items-center px-4">
      <div className="mb-16 text-center">
        <h2 className="mb-4 whitespace-pre-line text-3xl font-bold text-primary-700">
          Join the PearAI Beta Tester Program! 👾🍐
        </h2>
        <p className="mb-6 whitespace-pre-line text-base text-gray-600">
          At PearAI, our mission is to allow anyone to turn their ideas into
          creation. We’re constantly adding new features and updates to get
          closer to our goal. To make sure public releases are bug-free, we
          regularly release early versions of PearAI with experimental features
          to those in the PearAI Beta Tester Program!
        </p>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            What&apos;s In It For You? 🍐
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-left text-base text-gray-700">
            <li>Free base PearAI subscription for the entire month</li>
            <li>Exclusive early access to experimental features and updates</li>
            <li>
              Direct influence on product development—your feedback shapes what
              we build!
            </li>
            <li>
              Be part of the inner circle that&apos;s helping create the next
              generation of AI tools. You&apos;ll get a special Discord role as
              well on the PearAI server.
            </li>
          </ul>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            How It Works 🍐
          </h3>
          <p className="mb-2 text-base text-gray-700">
            Simply fill out the form below if you’re interested in joining! If
            selected, you can try out our beta releases, play around with new
            features, and let us know what you think via a quick feedback form.
            If you spot any bugs or have suggestions, we want to hear them!
          </p>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            We Can&apos;t Do This Without You 🍐
          </h3>
          <p className="text-base text-gray-700">
            We&apos;re incredibly grateful for beta testers who take the time to
            help us improve. Your participation doesn&apos;t just help us; it
            helps build better tools for everyone who wants to create software.
            Fill out the form below to join!
          </p>
        </div>
      </div>
      <div className="w-full max-w-xl">
        <BetaTesterSignupForm />
      </div>
    </section>
  );
}
