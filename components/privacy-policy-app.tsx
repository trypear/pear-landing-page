import Link from "next/link";
import { CONTACT_EMAIL } from "@/utils/constants";

export default function PrivacyPolicyComponent() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          <div className="mx-auto max-w-3xl pb-8 text-left text-gray-800 md:pb-8">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              PearAI App Privacy Policy
            </h1>
            <p className="mb-6 leading-relaxed text-gray-600">
              <strong>Last updated: October 18th, 2024</strong>
            </p>
            <p className="text-xl text-gray-600">
              Welcome to the PearAI Privacy Policy regarding the main PearAI
              app.
            </p>
          </div>
          <div className="mx-auto max-w-3xl text-lg">
            <p className="mb-6 leading-relaxed text-gray-600">
              PearAI aims to be a gold standard in transparency and good
              intentions as a company, and so here we&apos;ll outline exactly
              what we track. We aren&apos;t here to steal or sell your data, but
              just allow you to make what you want.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              This Privacy Policy outlines how PearAI (referred to as
              &quot;PearAI,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) handles personal information in relation to our
              main app, PearAI. This Privacy Notice is meant to provide
              information about our privacy practices, but it is not a contract
              and does not create any legal rights or obligations not otherwise
              provided by law.
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Personal Data
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              You are not required to provide any personal data to use our
              open-source software
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              If you opt to use PearAI&apos;s hosted services (e.g., PearAI
              Server), the only personal data we store is the information you
              provide during registration, such as your name, email address,
              company name (if applicable), and any other optional details you
              may choose to provide during the registration process. Aside from
              this, we maintain metrics on activity on servers, such as number
              of requests, as this is needed to handle abuse and quotas. We do
              not store the actual contents of your requests.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              Payment information is securely processed by our payment processor
              (Stripe). We do not directly handle or store payment card details.
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Your Code</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Your code is not stored by PearAI when using your own API key.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              Your code is not stored by PearAI servers. We have a zero-data
              retention policy for Anthropic models and zero-data retention
              policies are currently pending for other models.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              All indexing for your codebase (for PearAI to have codebase
              knowledge) happens locally on your machine.
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Logging</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              When using PearAI, we collect anonymous usage information to help
              us improve the product. All data collected by PearAI is anonymized
              and stripped of any personally identifiable information (PII)
              before being processed by Telemetry. For full transparency, you
              can review the code for this{" "}
              <a
                href="https://github.com/trypear/pearai-submodule/pull/16/files#diff-13a0c1fe9c6c6ddec4347498077a92020ff2d64ebc3f70b56e45a8413a8ce0fbR7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                here
              </a>
              .
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">We track:</p>
            <ul className="mb-6 ml-8 list-disc leading-relaxed text-gray-600">
              <li>Type of request (e.g., chat)</li>
              <li>
                Model and command information: name of model and command used
              </li>
              <li>System information: name of your operating system</li>
            </ul>
            <p className="mb-6 leading-relaxed text-gray-600">
              We do not track your actual request contents to LLM when you use
              your own API key. On PearAI&apos;s hosted servers, if you opt to
              use them, we do not store this information either. We are
              committed to protecting the security and privacy of your data.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              You can also opt out of this by modifying the config.json file in
              ~/.pearai directory. Simply add:
            </p>
            <pre className="mb-6 bg-gray-100 p-2">
              &quot;allowAnonymousTelemetry&quot; = false
            </pre>
            <p className="mb-6 leading-relaxed text-gray-600">
              to disable this. Note that within the pearai-submodule, there may
              be lingering Telemetry calls from the Continue fork - these have
              been disabled, as PearAI does not want to track that data.
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Updates to This Privacy Policy
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              We may update this Privacy Policy if necessary. The most recent
              update date is noted at the top of this policy.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              In the case of significant changes, we will make a prominent post
              outlining the changes and notify our users. We encourage you to
              review this Privacy Policy periodically to stay informed about how
              we protect your information.
            </p>
          </div>
          <div className="mx-auto max-w-3xl text-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Reach Out</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              If you have any questions or concerns about this Privacy Policy or
              other privacy-related matters, please send an email to{" "}
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {CONTACT_EMAIL}
              </Link>{" "}
              and we will get back to you promptly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
