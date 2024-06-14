import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function TryPear() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          {/* SVG remains the same as in your previous Hero.tsx */}
        </div>

        {/* Content area */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Try Pear.AI For Free</h1>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white-main bg-primary-500 hover:bg-primary-600 w-full mb-4 sm:w-auto sm:mb-0" href="https://forms.gle/171UyimgQJhEJbhU7">Join Waitlist</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white-main bg-secondary-main hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing">More details</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
