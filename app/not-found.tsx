import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found.",
  canonical: "/404",
});

export default function Custom404() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-primary-800 dark:text-primary-700 sm:text-9xl">
            404
          </h1>
          <h2 className="mt-6 text-2xl font-semibold text-secondary-800 dark:text-white-50">
            Oops! Page Not Found
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button className="bg-primary-800 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
