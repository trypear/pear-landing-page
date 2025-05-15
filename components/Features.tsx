import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

      <div className="flex items-center justify-center lg:pb-8">
        <span className="max-w-md text-center text-4xl font-medium lg:max-w-2xl lg:text-[44px] lg:font-semibold">
          PearAI Makes You An Expert
        </span>
      </div>

      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

      <div className="items-center justify-center lg:flex-col lg:px-6 lg:pb-14">
        <div className="mx-auto w-full max-w-3xl rounded-xl px-3 lg:max-w-[1049px] lg:bg-[#F4F4F4] lg:p-7">
          <div className="grid items-start lg:grid-cols-2">
            <div className="space-y-2">
              <span className="text-2xl font-medium leading-tight">
                PearAI Router
              </span>
              <p className="text-base text-[#666666]">
                The best AI model for coding changes by the week, only known to
                insiders managing multiple subscriptions. PearAI Router
                automatically connects you to the highest-performing AI models
                for coding across all tools. Simply select &apos;PearAI
                Model&apos; to get the best on market with a single
                subscription.
              </p>
            </div>

            <div className="space-y-3 pt-7 lg:pl-10 lg:pt-0">
              <div className="flex items-center gap-2 rounded-xl border-2 border-[#A1DB4B] bg-[#B3F353] px-4 py-5 opacity-80">
                <span className="font-medium">PearAI Model</span>
                <span className="font-mono font-medium text-[#666666]">
                  94.10
                </span>
              </div>

              <div className="flex w-[75%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="font-medium">GPT-4o</span>
                <span className="font-mono font-medium text-[#666666]">
                  80.53
                </span>
              </div>

              <div className="flex w-[41%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="text-nowrap font-medium">
                  Meta Llama 3.1 405b
                </span>
                <span className="font-mono font-medium text-[#666666]">
                  80.43
                </span>
              </div>

              <div className="flex w-[23%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="whitespace-nowrap font-medium">
                  Claude 3 Opus
                </span>
                <span className="font-mono font-medium text-[#666666]">
                  76.74
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

        {/* //Section 1 */}
        <div className="mx-auto grid w-full lg:mt-5 lg:max-w-[1049px] lg:grid-cols-2 lg:gap-5">
          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:px-0 lg:pt-7">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2 lg:px-7">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">PearAI Creator</span>
                  <span className="mb-1 text-[#b3b3b3]">
                    Powered by Roo Code / Cline*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Create new projects from scratch! PearAI ensures your project
                  adheres to the latest technologies and best practices.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/PearAICreatorVector.svg"
                  alt="PearAI Creator"
                  className="h-full w-full"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-50 block h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>

          <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">PearAI Agent</span>
                  <span className="mb-1 text-[#b3b3b3]">
                    Powered by Roo Code / Cline*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Coding agent that can automatically code features and fix bugs
                  for you.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/PearAIAgentVector.svg"
                  alt="PearAI Agent"
                  className="h-auto w-full lg:pb-7"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

        {/* //Section 2 */}
        <div className="mx-auto grid w-full lg:mt-5 lg:max-w-[1049px] lg:grid-cols-2 lg:gap-5">
          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">PearAI Login</span>
                  <span className="mb-1 text-[#b3b3b3]">Powered by PearAI</span>
                </div>
                <p className="text-base text-[#666666]">
                  Almost all projects require users to login. Let PearAI help
                  you with this with best practices and the latest tools.
                </p>
              </div>
              <div className="relative flex-col items-center justify-center">
                <Image
                  src="/images/PearAILoginVector.svg"
                  alt="PearAI Creator"
                  className="h-auto w-full lg:pb-7"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-50 h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:from-[#F4F4F4]"></div>
              </div>
            </div>
          </div>

          <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

          <div className="mx-auto w-full max-w-3xl rounded-xl pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-0 px-3 lg:space-y-2 lg:px-0">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">PearAI Launch</span>
                  <span className="mb-1 text-[#b3b3b3]">
                    Powered by Netlify*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Launches your web projects to the internet so you can share
                  them with everyone.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/PearAILaunchVector.svg"
                  alt="PearAI Agent"
                  className="h-auto w-full"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-50 block h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>
    </>
  );
}
