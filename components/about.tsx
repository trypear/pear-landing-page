"use client";

import React from "react";
import Footer from "./footer";
import CTA from "./cta";
import Image from "next/image";

const AboutComponent: React.FC = () => {
  return (
    <>
      <div className="w-full px-6">
        <section className="mx-auto mb-[68px] mt-[122px] flex max-w-[1049px] flex-col gap-[68px]">
          <div className="flex flex-col gap-5">
            <div className="font-mono text-sm text-black">
              PEARAI IS MADE FOR YOUR NEXT PROJECT.
            </div>
            <h2 className="text-[44px] font-semibold text-black">About Us</h2>
            <p className="text-xl text-[#666666]">
              Any idea you have, PearAI is here to help you build it. PearAI is
              an AI code editor with a suite of the best AI tools to allow you
              to make what you want. Not just for prototyping, but for a long
              lifespan of added features and growth.
            </p>
            <span className="text-xl text-[#666666]">
              Just remember to make what excites!
            </span>
          </div>

          <div className="flex flex-col gap-10">
            <span className="text-[44px] font-semibold text-black">
              Features - stay tuned for PearAI V2!
            </span>

            <div className="items-center justify-center lg:flex-col">
              {/* //Section 1 */}
              <div className="mx-auto grid w-full max-w-3xl gap-5 lg:max-w-[1049px] lg:grid-cols-2">
                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Creator
                          <br />
                          (Coming Soon)
                        </span>
                        <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                          Powered by Roo Code / Cline
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Create new projects from scratch! PearAI ensures your
                        project adheres to the latest technologies and best
                        practices.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAICreatorVector.svg"
                        alt="PearAI Creator"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Agent
                        </span>
                        <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                          Powered by Roo Code / Cline
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Coding agent that can automatically code features and
                        fix bugs for you.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAIAgentVector.svg"
                        alt="PearAI Agent"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* //Section 2 */}
              <div className="mx-auto mt-5 grid w-full max-w-3xl gap-5 lg:max-w-[1049px] lg:grid-cols-2">
                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Router
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Automatically use the best AI on the market.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAIRouterVector.svg"
                        alt="PearAI Creator"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Chat
                        </span>
                        <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                          Powered by Continue
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Make edits in your codebase.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAIChatVector.svg"
                        alt="PearAI Agent"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* //Section 3 */}
              <div className="mx-auto mt-5 grid w-full max-w-3xl gap-5 lg:max-w-[1049px] lg:grid-cols-2">
                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Login
                          <br />
                          (Coming Soon)
                        </span>
                        <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                          Powered by PearAI
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Almost all projects require users to login. Let PearAI
                        help you with this with best practices and the latest
                        tools.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAILoginVector.svg"
                        alt="PearAI Creator"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto w-full rounded-xl bg-[#F4F4F4] p-7 pb-0">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-medium">
                          PearAI Launch
                          <br />
                          (Coming Soon)
                        </span>
                        <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                          Powered by Netlify
                        </span>
                      </div>
                      <p className="text-base text-[#666666]">
                        Launches your web projects onto to internet so you can
                        share with everyone.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/PearAILaunchVector.svg"
                        alt="PearAI Agent"
                        className="h-auto w-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-center text-2xl font-medium text-[#666666]">
                ...and many more!
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default AboutComponent;
