import React from "react";
import Footer from "@/components/footer";

export default function PayAsYouGoPage() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-24">
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1 className="mt-8 text-4xl font-medium leading-tight sm:text-4xl md:text-4xl lg:text-4xl">
              No More Quota Limits on PearAI
            </h1>
          </header>

          <div className="mt-8 max-w-3xl text-lg">
            <p className="mb-6">
              Starting Feb 9th, 2025 we&apos;ve removed the quota limit and
              introduced usage-based billing.
            </p>
            <p className="mb-8">
              Your PearAI Subscription includes monthly PearAI Credits that
              automatically apply to your PearAI usage. Most people don&apos;t
              even exhaust their credits, but in the rare case you can
              pay-as-you-go to keep building without limits. Additional usage
              based on LLM costs will be billed to your payment method. If you
              have top up credits, they will still be on your account and used
              before any pay-as-you-go extra credits. To continue using PearAI
              for no additional cost, simply select &ldquo;PearAI Model
              Mini&rdquo; as the model, and extra usage will be free. If you
              have any questions, please contact us on{" "}
              <a
                href="https://discord.gg/7QMraJUsQt"
                className="text-primary-600 underline hover:text-primary-700"
              >
                Discord
              </a>
              !
            </p>

            <div className="mb-8">
              <div className="relative">
                <div className="mb-4 h-6 w-full overflow-hidden rounded-full">
                  <div className="flex h-full w-full">
                    <div className="h-full w-[70%] bg-primary-600"></div>
                    <div className="h-full flex-1 bg-primary-300"></div>
                  </div>
                </div>
                <div className="absolute left-0 top-8 w-[70%]">
                  <h2 className="mb-2 text-xl font-semibold">Monthly credit</h2>
                  <p className="text-gray-600">included with your plan</p>
                </div>
                <div className="absolute right-0 top-8 w-[30%]">
                  <h2 className="mb-2 text-xl font-semibold">
                    Additional usage
                  </h2>
                  <p className="text-gray-600">pay-as-you-go</p>
                </div>
              </div>
              <div className="h-24"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
