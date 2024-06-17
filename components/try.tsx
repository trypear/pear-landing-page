import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function TryPear() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Illustration behind content */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 -ml-20 hidden lg:block"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* SVG remains the same as in your previous Hero.tsx */}
        </div>

        {/* Content area */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Try Pear.AI For Free
            </h1>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn mb-4 w-full bg-purple-600 text-white hover:bg-purple-700 sm:mb-0 sm:w-auto"
                  href="https://forms.gle/171UyimgQJhEJbhU7"
                >
                  Join Waitlist
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn w-full bg-gray-700 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                  href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing"
                >
                  More details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
