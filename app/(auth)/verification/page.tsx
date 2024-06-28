import { Button } from "@/components/ui/button";

export default function Verification() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="h1">Please Check Your Email For Confirmation</h1>
          </div>
          <div className="mx-auto max-w-xl">
            <div className="flex items-center">
              <div
                className="mr-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
              <div className="text-gray-700">
                If you&apos;ve already confirmed your email, please click sign
                in.
              </div>
              <div
                className="ml-3 grow border-t border-dotted border-gray-700"
                aria-hidden="true"
              ></div>
            </div>
            <div className="-mx-3 mt-11 flex flex-wrap">
              <div className="w-full px-3 text-center">
                <Button
                  size={"lg"}
                  className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                >
                  Sign in
                </Button>
                <div className="mt-2 text-sm text-gray-500">
                  If no email received, check spam folder.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
