import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            {/* Left side - privacy, tos, copyright */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2 flex items-center">
                <Link
                  href="/privacy"
                  className="ml-3 hover:text-gray-500"
                  aria-label="Privacy policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="ml-4 hover:text-gray-500"
                  aria-label="Terms of service"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="ml-3 mr-4 mt-4 text-sm text-gray-600 md:mt-0">
                &copy; Pear AI - All rights reserved.
              </div>
            </div>
            {/* Right side - social links */}
            <ul className="mb-4 mt-2 flex md:order-1 md:mb-0 md:ml-4 md:mt-0">
              <li className="ml-3">
                <Link
                  href="https://github.com/orgs/trypear/repositories"
                  target="_blank"
                  className="flex items-center justify-center text-secondary-main transition duration-150 ease-in-out hover:text-gray-500"
                  aria-label="Github"
                >
                  GitHub
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://discord.gg/7QMraJUsQt"
                  target="_blank"
                  className="flex items-center justify-center text-secondary-main transition duration-150 ease-in-out hover:text-gray-500"
                  aria-label="Discord"
                >
                  Discord
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/about"
                  className="flex items-center justify-center text-secondary-main transition duration-150 ease-in-out hover:text-gray-500"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
