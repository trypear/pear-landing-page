import React from "react";
import Link from "next/link";
import DocumentIcon from "./document.svg";
import PearLightLogo from "./PearLight70x70.svg";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="flex items-center">
                <div className="mb-2">
                  {/* Logo */}
                  <Link href="/" className="inline-block" aria-label="Cruip">
                    {/* <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg> */}
                    <PearLightLogo />
                  </Link>
                </div>
                <Link href="/privacy" className="ml-3">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="ml-2">
                  Terms of Service
                </Link>
              </div>

              <div className="text-gray-400">
                Supercharge your development in an editor designed for less
                coding, with AI.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7"></div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
              <li className="ml-4">
                <Link
                  href="https://github.com/orgs/trypear/repositories"
                  target="_blank"
                  className="flex items-center justify-center rounded-full bg-gray-800 text-purple-600 transition duration-150 ease-in-out hover:bg-purple-600 hover:text-gray-100"
                  aria-label="Github"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://www.instagram.com/panangbros/"
                  target="_blank"
                  className="flex items-center justify-center rounded-full bg-gray-800 text-purple-600 transition duration-150 ease-in-out hover:bg-purple-600 hover:text-gray-100"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit#heading=h.4w42owbrw5n8"
                  className="flex items-center justify-center rounded-full bg-gray-800 text-purple-600 transition duration-150 ease-in-out hover:bg-purple-600 hover:text-gray-100"
                  target="_blank"
                  aria-label="Documentation"
                >
                  <DocumentIcon className="h-7 w-7 fill-current" />
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="mr-4 text-sm text-gray-400">
              &copy; Pear AI - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
