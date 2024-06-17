import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 mb-4">Loved By Developers</h2>
            <p className="text-xl text-gray-400">
              Hear why the community thinks Pear is the best (and only
              Open-Sourced) AI-powered code editor on the market.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mx-auto grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
            {/* 1st testimonial */}
            <div
              className="flex h-full flex-col bg-gray-800 p-6"
              data-aos="fade-up"
            >
              <div>
                <div className="relative mb-4 inline-flex flex-col">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage01}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute right-0 top-0 -mr-3 h-5 w-6 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="grow text-lg text-gray-400">
                {" "}
                Pear is awesome! Someone finally put GPT into a code editor in a
                seamless way. It&apos;s so elegant and easy. I&apos;m an hour in
                and already hooked.{" "}
              </blockquote>
              <div className="mt-6 border-t border-gray-700 pt-5 font-medium text-gray-700">
                <cite className="not-italic text-gray-200">Anastasia Dan</cite>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex h-full flex-col bg-gray-800 p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative mb-4 inline-flex flex-col">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage02}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute right-0 top-0 -mr-3 h-5 w-6 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="grow text-lg text-gray-400">
                Pear is the best product I&apos;ve used in a while - it&apos;s
                an AI enabled editor. I just asked it to write a README for a
                project I&apos;ve been working on - analyzed the code-base and
                worked first time.
              </blockquote>
              <div className="mt-6 border-t border-gray-700 pt-5 font-medium text-gray-700">
                <cite className="not-italic text-gray-200">Ryan Simmons</cite>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex h-full flex-col bg-gray-800 p-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative mb-4 inline-flex flex-col">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage03}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute right-0 top-0 -mr-3 h-5 w-6 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="grow text-lg text-gray-400">
                started using Pear yesterday & i&apos;m blown away. it&apos;s
                how Copilot should feel. i&apos;m completely off VSCode now.
              </blockquote>
              <div className="mt-6 border-t border-gray-700 pt-5 font-medium text-gray-700">
                <cite className="not-italic text-gray-200">
                  Matthew Armstrong
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
