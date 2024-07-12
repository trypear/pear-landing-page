import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section>
      {/* the extra mt-20 is here because the top navbar has been changed to "fixed" so the height of navbar is removed, thus moving the down content shift upwards */}
      <div className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto flex max-w-4xl flex-col items-center pb-12 text-center md:pb-16">
            <div className="text-4xl font-semibold sm:text-5xl">
              <h1 className="hidden sm:block">
                <PearHeroLogo
                  width="26"
                  alt="PearAI Logo"
                  className="-mt-3 mr-2 inline-flex"
                />
                <span className="text-primary-700">PearAI: </span>
                The Open Source AI&#8209;Powered Code Editor
              </h1>
              {/* Mobile Layout - Logo + PearAI on it's own line*/}
              <h1 className="sm:hidden">
                <div>
                  <PearHeroLogo
                    width="26"
                    alt="PearAI Logo"
                    className="-mt-3 mr-2 inline-flex"
                  />
                  <span className="text-primary-700">PearAI </span>
                </div>
                <span className="flex flex-col text-3xl">
                  <span>The Open Source</span>{" "}
                  <span>AI&#8209;Powered Code Editor</span>
                </span>
              </h1>
            </div>

            <div className="mt-6 max-w-md sm:max-w-lg">
              <p
                className="mb-2 text-sm text-secondary-400 sm:text-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Speed up your development process by seamlessly integrating AI
                into your workflow 🚀
              </p>
              <p
                className="mb-4 text-sm text-secondary-400 sm:text-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Afraid of switching editors? No need, Pear is a fork of VSCode
                and retains all its features, you&apos;ll feel right at home 😏
              </p>
            </div>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button asChild size="lg">
                  <Link
                    href="https://forms.gle/171UyimgQJhEJbhU7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Waitlist
                    <ExternalLink size={"16"} />
                  </Link>
                </Button>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-2 sm:ml-4 sm:mt-0 sm:w-auto"
                >
                  <Link
                    href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Details
                    <ExternalLink size={"16"} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
