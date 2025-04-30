import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PearAI OSS Contributor Program",
  description:
    "Join the PearAI OSS Contributor Program for rewards, recognition, and community impact.",
  alternates: { canonical: "/programs/oss-contributor-benefit" },
};

export default function OssContributorBenefitPage() {
  return (
    <section className="mx-auto mt-36 flex w-full max-w-3xl flex-col items-center px-4">
      <div className="mb-16 text-center">
        <h2 className="mb-4 whitespace-pre-line text-3xl font-bold text-primary-700">
          Join the PearAI OSS Contributor Program! 👾🍐
        </h2>
        <p className="mb-6 whitespace-pre-line text-base text-gray-600">
          PearAI is proudly open source, driven by an amazing community working
          together to help anyone build software. Whether you&apos;re a student
          looking to enhance your resume, a coding enthusiast, or a PearAI user
          hoping to improve the product, we welcome and value your
          contributions!
        </p>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            What You&apos;ll Receive 🍐
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-left text-base text-gray-700">
            <li>Free base PearAI subscription for an entire month</li>
            <li>
              Official contributor status to add to your LinkedIn and resume
            </li>
            <li>
              Distinguished Discord role with regular shoutouts in the PearAI
              community
            </li>
          </ul>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            How to Contribute: 🍐
          </h3>
          <div className="mb-2 text-left">
            <p className="mb-1 font-semibold text-gray-700">
              Ticket-based improvements:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-base text-gray-600">
              <li>
                Solving needed tickets listed in our Sprint board{" "}
                <a
                  className="text-primary-700 underline"
                  href="#"
                  target="https://github.com/orgs/trypear/projects"
                  rel="noopener"
                >
                  here
                </a>
                .
              </li>
              <li>
                If you want to see an improvement not listed, you can file an
                issue
              </li>
            </ul>
          </div>
          <div className="mb-2 text-left">
            <p className="mb-1 font-semibold text-gray-700">Bug fixes:</p>
            <ul className="list-disc space-y-1 pl-5 text-base text-gray-600">
              <li>Identifying and fixing bugs you encounter</li>
              <li>Submitting pull requests to fix the bug</li>
            </ul>
          </div>
          <div className="text-left">
            <p className="mb-1 font-semibold text-gray-700">
              Bounty-based tickets:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-base text-gray-600">
              <li>
                Larger tickets that if you solve, you will get awarded the
                listed bounty amount. View bounty-based tickets{" "}
                <a
                  className="text-primary-700 underline"
                  href="#"
                  target="https://github.com/orgs/trypear/projects/14"
                  rel="noopener"
                >
                  here
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            Why Contribute? 🍐
          </h3>
          <ul className="mb-2 list-disc space-y-1 pl-6 text-left text-base text-gray-700">
            <li>
              <b>Career advancement:</b> Companies love hiring open source
              contributors. Build your portfolio with real-world open source
              experience.
            </li>
            <li>
              <b>Free benefits &amp; Bounties:</b> Enjoy a free PearAI base
              subscription. Potentially earn monetary bounties.
            </li>
            <li>
              <b>Community impact:</b> Help make software creation accessible to
              everyone. Join an active, supportive developer community. Receive
              recognition in weekly community shoutouts.
            </li>
          </ul>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            How to Get Started 🍐
          </h3>
          <ol className="mb-2 list-decimal space-y-1 pl-6 text-left text-base text-gray-700">
            <li>
              Visit our GitHub repository{" "}
              <a
                className="text-primary-700 underline"
                href="#"
                target="https://github.com/trypear/pearai-master"
                rel="noopener"
              >
                here
              </a>
            </li>
            <li>
              Join our Discord server and message in <b>#general</b> which
              ticket you want to take up.
            </li>
            <li>Submit your pull request for review!</li>
          </ol>
        </div>
        <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-primary-700">
            We Can&apos;t Do This Without You 🍐
          </h3>
          <p className="text-base text-gray-700">
            Your contributions directly help build better tools for everyone who
            wants to create software. Join us in making software development
            accessible to all!
          </p>
        </div>
      </div>
    </section>
  );
}
