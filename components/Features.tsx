import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="flex items-center justify-center pb-8">
        <span className="text-[44px] font-semibold">
          PearAI Makes You An Expert
        </span>
      </div>
      <div className="items-center justify-center px-6 lg:flex-col">
        <div className="mx-auto w-full max-w-3xl rounded-xl bg-[#F9F9F9] p-7 lg:max-w-[1049px]">
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

            <div className="space-y-3 pl-10">
              <div className="flex items-center gap-2 rounded-xl border-2 border-[#A1DB4B] bg-[#B3F353] px-4 py-5 opacity-80">
                <span className="font-medium">PearAI Model</span>
                <span className="font-mono font-medium text-[#666666]">
                  82.10
                </span>
              </div>

              <div className="flex w-[75%] items-center gap-2 rounded-xl bg-[#f2f2f2] px-4 py-5">
                <span className="font-medium">GPT-4o</span>
                <span className="font-mono font-medium text-[#666666]">
                  80.53
                </span>
              </div>

              <div className="flex w-[41%] items-center gap-2 rounded-xl bg-[#f2f2f2] px-4 py-5">
                <span className="text-nowrap font-medium">
                  Meta Llama 3.1 405b
                </span>
                <span className="font-mono font-medium text-[#666666]">
                  80.43
                </span>
              </div>

              <div className="flex w-[23%] items-center gap-2 rounded-xl bg-[#f2f2f2] px-4 py-5">
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

        {/* //Section 1 */}
        <div className="mx-auto mt-5 grid w-full max-w-3xl gap-5 lg:max-w-[1049px] lg:grid-cols-2">
          <div className="mx-auto w-full rounded-xl bg-[#F9F9F9] p-7 pb-0">
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-medium">PearAI Creator</span>
                  <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                    Powered by Roo Code / Cline*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Create new projects from scratch! PearAI ensures your project
                  adheres to the latest technologies and best practices.
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

          <div className="mx-auto w-full rounded-xl bg-[#F9F9F9] p-7 pb-0">
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-medium">PearAI Agent</span>
                  <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
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
          <div className="mx-auto w-full rounded-xl bg-[#F9F9F9] p-7 pb-0">
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-medium">PearAI Login</span>
                  <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                    Powered by Supabase*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Almost all projects require users to login. Let PearAI help
                  you with this with best practices and the latest tools.
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

          <div className="mx-auto w-full rounded-xl bg-[#F9F9F9] p-7 pb-0">
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-medium">PearAI Launch</span>
                  <span className="mb-1 text-sm font-normal text-[#b3b3b3]">
                    Powered by Netlify*
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Launches your web projects onto the internet so anyone can
                  view and use them.
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
      </div>
    </>
  );
}
