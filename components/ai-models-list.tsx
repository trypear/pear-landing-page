export default function AIModelsList() {
  return (
    <div className="items-center justify-center px-6 pt-6 lg:flex">
      <div className="mx-auto w-full max-w-3xl rounded-xl border-2 border-gray-200 p-5 dark:border-gray-50 lg:max-w-[1049px]">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4 leading-tight">
            <h2 className="text-2xl font-semibold dark:text-gray-900 md:text-[28px]">
              Always Get The Best.
            </h2>
            <p className="text-base text-black/60 dark:text-gray-500 sm:text-lg">
              The best frontier model for coding changes by the week, only known
              to insiders managing multiple subscriptions. PearAI Router
              automatically connects you to the highest-performing AI models for
              coding. Simply select &apos;PearAI Model&apos; to get the best on
              market with a single subscription.
            </p>
          </div>

          <div className="space-y-3">
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ddff61] from-0% via-[#7CD5FF] via-50% to-[#FF90E3] to-100% opacity-60" />
              <div className="relative flex items-center gap-3 p-3">
                <span className="font-mono text-black/60 dark:text-gray-700">
                  1
                </span>
                <span className="font-medium">PearAI Model</span>
              </div>
            </div>

            <div className="flex w-[70%] items-center gap-3 rounded-xl border-[1.5px] border-gray-200 bg-white-50 p-3 dark:border-gray-50 dark:bg-black">
              <span className="font-mono text-black/60 dark:text-gray-500">
                2
              </span>
              <span className="font-medium">Claude 3.5 Sonnet</span>
            </div>

            <div className="flex w-[65%] items-center gap-3 rounded-xl border-[1.5px] border-gray-200 bg-white-50 p-3 dark:border-gray-50 dark:bg-black">
              <span className="font-mono text-black/60 dark:text-gray-500">
                3
              </span>
              <span className="font-medium">GPT-4o</span>
            </div>

            <div className="flex w-[45%] items-center gap-3 rounded-xl border-[1.5px] border-gray-200 bg-white-50 p-3 dark:border-gray-50 dark:bg-black">
              <span className="font-mono text-black/60 dark:text-gray-500">
                4
              </span>
              <span className="whitespace-nowrap font-medium">
                Meta Llama 3.1 405b
              </span>
            </div>

            <p className="text-xs text-black/40 dark:text-gray-500 sm:text-sm">
              LLM Benchmark Scores*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
