import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found.",
  canonical: "/404",
});
export default function Custom404() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20">
            <div className="mx-auto max-w-xl">
              <div className="mb-10 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto max-w-full"
                >
                  <source src="/gifs/dukepanshake-404.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
